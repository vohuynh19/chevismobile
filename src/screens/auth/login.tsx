import {useTranslation} from 'react-i18next';
import FastImage from 'react-native-fast-image';
import {Controller, FieldErrors, FormProvider, useForm} from 'react-hook-form';

import {images} from '~assets';
import {useLogin} from '~core/react-query';
import {Button, FormItem, Input, Screen, View} from '~core/ui';
import {
  showErrorMessage,
  showSuccessMessage,
  useValidationRules,
} from '~core/utils';

type LoginFormValues = {
  email: string;
  password: string;
};

const LoginScreen = () => {
  const {t} = useTranslation();
  const validationRules = useValidationRules();

  const {login, isLoading} = useLogin();

  const useFormValues = useForm<LoginFormValues>();
  const {
    handleSubmit,
    formState: {errors},
    control,
  } = useFormValues;

  const onLogin = () => {
    handleSubmit(
      formData => handleFormSuccess(formData),
      formData => handleFormFail(formData),
    )();
  };

  const handleFormSuccess = async (formData: LoginFormValues) => {
    try {
      await login({
        ...formData,
      });

      showSuccessMessage('Login success');
    } catch (error) {
      showSuccessMessage('Wrong email or password');
    }
  };

  const handleFormFail = (_: FieldErrors<LoginFormValues>) => {
    showErrorMessage('Please completed the login form before submit');
  };

  return (
    <Screen topInset top={40} paddingHorizontal={4} alignItems="center">
      <FastImage
        source={images.xetMiY}
        resizeMode="contain"
        style={{
          height: 200,
          width: 200,
          marginBottom: 40,
        }}
      />

      <FormProvider {...useFormValues}>
        <View width={'100%'}>
          <FormItem>
            <FormItem.Label required>Tài khoản email</FormItem.Label>
            <Controller
              name={'email'}
              control={control}
              rules={{
                required: validationRules.required,
                validate: {
                  whitespace: validationRules.whitespace,
                },
                pattern: validationRules.email,
              }}
              render={({field: {onChange, value}}) => (
                <Input
                  allowClear
                  placeholder={'Nhập tên đăng nhập'}
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors?.email?.message}
                />
              )}
            />
          </FormItem>

          <FormItem>
            <FormItem.Label required>Mật khẩu</FormItem.Label>
            <Controller
              name={'password'}
              control={control}
              rules={{
                required: {
                  ...validationRules.required,
                },
              }}
              render={({field: {onChange, value}}) => (
                <Input
                  secureTextEntry
                  allowClear
                  placeholder={'Nhập mật khẩu'}
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors?.password?.message}
                />
              )}
            />
          </FormItem>

          <Button
            style={{marginTop: 16}}
            size="m"
            fullWidth
            title={t('auth.login')}
            onPress={onLogin}
            isLoading={isLoading}
          />
        </View>
      </FormProvider>
    </Screen>
  );
};

export default LoginScreen;
