import { checkWhetherDevelopmentEnvironment } from 'easy-soft-utility';

import { filePrefix } from './customConfig';

const LogoImage = `${filePrefix}746868813.jpeg`;

export const config = {
  appId: 'pdbpabiprlhjwg',
  showLogInConsole: checkWhetherDevelopmentEnvironment(),
  // showLogInConsole: true,
  // showRequestInfo: checkWhetherDevelopmentEnvironment(),
  // showUseVirtualRequestMessage: true,
  apiPrefix: {
    corsTargetDomain: 'https://interact.oa.32306.net',
  },
  apiSuccessCode: 200,
  authenticationFailCode: 2001,
  signInPath: '/customer/pages/signIn/main/index',
  apiVersion: 'v1',
  footerImage: LogoImage,
  footerText: '',
  footerDescription: '',
  defaultMetaData: {
    rankList: [],
    sectionList: [],
  },
};
