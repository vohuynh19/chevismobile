import {COMPONENT_TYPE, TestProps} from './type';

import answerCodeSet from './answerCodeSet';
import visusTable from './visusTable';

const TestSchedule = [
  {
    type: COMPONENT_TYPE.COUNTER,
    props: {
      title: '1',
    },
  },
  {
    type: COMPONENT_TYPE.COUNTER,
    props: {
      title: '2',
    },
  },
  {
    type: COMPONENT_TYPE.COUNTER,
    props: {
      title: '3',
    },
  },
  {
    type: COMPONENT_TYPE.TITLE,
    props: {
      title: 'sayLoudly',
    },
  },
  {
    type: COMPONENT_TYPE.COVER_EYE,
    props: {
      title: 'coverLeftEye',
      isLeft: true,
    },
  },
  {
    type: COMPONENT_TYPE.DUOCHROME,
    props: {
      title: 'duochrome',
      answerSet: answerCodeSet.duochrome,
    },
  },
  ...visusTable.reduce(
    (accumulator: TestProps[], currentValue) => [
      ...accumulator,
      {
        type: COMPONENT_TYPE.VISUS,
        props: {
          id: 0,
          title: 'visus',
          answerSet: answerCodeSet.visus,
          ...currentValue,
        },
      },
      {
        type: COMPONENT_TYPE.VISUS,
        props: {
          id: 1,
          title: 'visus',
          answerSet: answerCodeSet.visus,
          ...currentValue,
        },
      },
      {
        type: COMPONENT_TYPE.VISUS,
        props: {
          id: 2,
          title: 'visus',
          answerSet: answerCodeSet.visus,
          ...currentValue,
        },
      },
    ],
    [],
  ),
  {
    type: COMPONENT_TYPE.CAPYBARA_TITLE,
    props: {
      title: 'fewQuestionLeft',
    },
  },
  {
    type: COMPONENT_TYPE.COVER_EYE,
    props: {
      title: 'coverRightEye',
      isLeft: false,
    },
  },
  {
    type: COMPONENT_TYPE.DUOCHROME,
    props: {
      title: 'duochrome',
      answerSet: answerCodeSet.duochrome,
    },
  },
  ...visusTable.reduce(
    (accumulator: TestProps[], currentValue) => [
      ...accumulator,
      {
        type: COMPONENT_TYPE.VISUS,
        props: {
          id: 0,
          title: 'visus',
          answerSet: answerCodeSet.visus,
          ...currentValue,
        },
      },
      {
        type: COMPONENT_TYPE.VISUS,
        props: {
          id: 1,
          title: 'visus',
          answerSet: answerCodeSet.visus,
          ...currentValue,
        },
      },
      {
        type: COMPONENT_TYPE.VISUS,
        props: {
          id: 2,
          title: 'visus',
          answerSet: answerCodeSet.visus,
          ...currentValue,
        },
      },
    ],
    [],
  ),
  {
    type: COMPONENT_TYPE.CAPYBARA_TITLE,
    props: {
      title: 'hangOn',
    },
  },
  {
    type: COMPONENT_TYPE.TITLE,
    props: {
      title: 'getCloser',
    },
  },
  {
    type: COMPONENT_TYPE.COVER_EYE,
    props: {
      title: 'coverLeftEye',
      isLeft: true,
    },
  },
  {
    type: COMPONENT_TYPE.DIAL,
    props: {
      title: 'dial',
      answerSet: answerCodeSet.dial,
    },
  },
  {
    type: COMPONENT_TYPE.COVER_EYE,
    props: {
      title: 'coverRightEye',
      isLeft: false,
    },
  },
  {
    type: COMPONENT_TYPE.DIAL,
    props: {
      title: 'dial',
      answerSet: answerCodeSet.dial,
    },
  },
  {
    type: COMPONENT_TYPE.LOADING,
    props: {
      title: 'loading',
    },
  },
];

export default TestSchedule;
