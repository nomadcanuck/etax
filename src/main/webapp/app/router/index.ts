import Vue from 'vue';
import Component from 'vue-class-component';
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate' // for vue-router 2.2+
]);
import Router from 'vue-router';
const Home = () => import('../core/home/home.vue');
const Error = () => import('../core/error/error.vue');
const Register = () => import('../account/register/register.vue');
const Activate = () => import('../account/activate/activate.vue');
const ResetPasswordInit = () => import('../account/reset-password/init/reset-password-init.vue');
const ResetPasswordFinish = () => import('../account/reset-password/finish/reset-password-finish.vue');
const ChangePassword = () => import('../account/change-password/change-password.vue');
const Settings = () => import('../account/settings/settings.vue');
const JhiUserManagementComponent = () => import('../admin/user-management/user-management.vue');
const JhiUserManagementViewComponent = () => import('../admin/user-management/user-management-view.vue');
const JhiUserManagementEditComponent = () => import('../admin/user-management/user-management-edit.vue');
const JhiConfigurationComponent = () => import('../admin/configuration/configuration.vue');
const JhiDocsComponent = () => import('../admin/docs/docs.vue');
const JhiHealthComponent = () => import('../admin/health/health.vue');
const JhiLogsComponent = () => import('../admin/logs/logs.vue');
const JhiAuditsComponent = () => import('../admin/audits/audits.vue');
const JhiMetricsComponent = () => import('../admin/metrics/metrics.vue');
/* tslint:disable */
// prettier-ignore
const BankAccount = () => import('../entities/bank-account/bank-account.vue');
// prettier-ignore
const BankAccountUpdate = () => import('../entities/bank-account/bank-account-update.vue');
// prettier-ignore
const BankAccountDetails = () => import('../entities/bank-account/bank-account-details.vue');
// prettier-ignore
const Label = () => import('../entities/label/label.vue');
// prettier-ignore
const LabelUpdate = () => import('../entities/label/label-update.vue');
// prettier-ignore
const LabelDetails = () => import('../entities/label/label-details.vue');
// prettier-ignore
const Operation = () => import('../entities/operation/operation.vue');
// prettier-ignore
const OperationUpdate = () => import('../entities/operation/operation-update.vue');
// prettier-ignore
const OperationDetails = () => import('../entities/operation/operation-details.vue');
// prettier-ignore
const StdCodes = () => import('../entities/std-codes/std-codes.vue');
// prettier-ignore
const StdCodesUpdate = () => import('../entities/std-codes/std-codes-update.vue');
// prettier-ignore
const StdCodesDetails = () => import('../entities/std-codes/std-codes-details.vue');
// prettier-ignore
const StdCodesDesc = () => import('../entities/std-codes-desc/std-codes-desc.vue');
// prettier-ignore
const StdCodesDescUpdate = () => import('../entities/std-codes-desc/std-codes-desc-update.vue');
// prettier-ignore
const StdCodesDescDetails = () => import('../entities/std-codes-desc/std-codes-desc-details.vue');
// prettier-ignore
const StdCodesGroup = () => import('../entities/std-codes-group/std-codes-group.vue');
// prettier-ignore
const StdCodesGroupUpdate = () => import('../entities/std-codes-group/std-codes-group-update.vue');
// prettier-ignore
const StdCodesGroupDetails = () => import('../entities/std-codes-group/std-codes-group-details.vue');
// prettier-ignore
const StdCodesProp = () => import('../entities/std-codes-prop/std-codes-prop.vue');
// prettier-ignore
const StdCodesPropUpdate = () => import('../entities/std-codes-prop/std-codes-prop-update.vue');
// prettier-ignore
const StdCodesPropDetails = () => import('../entities/std-codes-prop/std-codes-prop-details.vue');
// jhipster-needle-add-entity-to-router-import - JHipster will import entities to the router here

Vue.use(Router);

// prettier-ignore
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/forbidden',
      name: 'Forbidden',
      component: Error,
      meta: { error403: true }
    },
    {
      path: '/not-found',
      name: 'NotFound',
      component: Error,
      meta: { error404: true }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/activate',
      name: 'Activate',
      component: Activate
    },
    {
      path: '/reset/request',
      name: 'ResetPasswordInit',
      component: ResetPasswordInit
    },
    {
      path: '/reset/finish',
      name: 'ResetPasswordFinish',
      component: ResetPasswordFinish
    },
    {
      path: '/account/password',
      name: 'ChangePassword',
      component: ChangePassword,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/account/settings',
      name: 'Settings',
      component: Settings,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/admin/user-management',
      name: 'JhiUser',
      component: JhiUserManagementComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    },
    {
      path: '/admin/user-management/new',
      name: 'JhiUserCreate',
      component: JhiUserManagementEditComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    },
    {
      path: '/admin/user-management/:userId/edit',
      name: 'JhiUserEdit',
      component: JhiUserManagementEditComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    },
    {
      path: '/admin/user-management/:userId/view',
      name: 'JhiUserView',
      component: JhiUserManagementViewComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    },
    {
      path: '/admin/docs',
      name: 'JhiDocsComponent',
      component: JhiDocsComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    },
    {
      path: '/admin/audits',
      name: 'JhiAuditsComponent',
      component: JhiAuditsComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    },
    {
      path: '/admin/jhi-health',
      name: 'JhiHealthComponent',
      component: JhiHealthComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    },
    {
      path: '/admin/logs',
      name: 'JhiLogsComponent',
      component: JhiLogsComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    },
    {
      path: '/admin/jhi-metrics',
      name: 'JhiMetricsComponent',
      component: JhiMetricsComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    },
    {
      path: '/admin/jhi-configuration',
      name: 'JhiConfigurationComponent',
      component: JhiConfigurationComponent,
      meta: { authorities: ['ROLE_ADMIN'] }
    }
    ,
    {
      path: '/entity/bank-account',
      name: 'BankAccount',
      component: BankAccount,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/bank-account/new',
      name: 'BankAccountCreate',
      component: BankAccountUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/bank-account/:bankAccountId/edit',
      name: 'BankAccountEdit',
      component: BankAccountUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/bank-account/:bankAccountId/view',
      name: 'BankAccountView',
      component: BankAccountDetails,
      meta: { authorities: ['ROLE_USER'] }
    }
    ,
    {
      path: '/entity/label',
      name: 'Label',
      component: Label,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/label/new',
      name: 'LabelCreate',
      component: LabelUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/label/:labelId/edit',
      name: 'LabelEdit',
      component: LabelUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/label/:labelId/view',
      name: 'LabelView',
      component: LabelDetails,
      meta: { authorities: ['ROLE_USER'] }
    }
    ,
    {
      path: '/entity/operation',
      name: 'Operation',
      component: Operation,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/operation/new',
      name: 'OperationCreate',
      component: OperationUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/operation/:operationId/edit',
      name: 'OperationEdit',
      component: OperationUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/operation/:operationId/view',
      name: 'OperationView',
      component: OperationDetails,
      meta: { authorities: ['ROLE_USER'] }
    }
    ,
    {
      path: '/entity/std-codes',
      name: 'StdCodes',
      component: StdCodes,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/std-codes/new',
      name: 'StdCodesCreate',
      component: StdCodesUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/std-codes/:stdCodesId/edit',
      name: 'StdCodesEdit',
      component: StdCodesUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/std-codes/:stdCodesId/view',
      name: 'StdCodesView',
      component: StdCodesDetails,
      meta: { authorities: ['ROLE_USER'] }
    }
    ,
    {
      path: '/entity/std-codes-desc',
      name: 'StdCodesDesc',
      component: StdCodesDesc,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/std-codes-desc/new',
      name: 'StdCodesDescCreate',
      component: StdCodesDescUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/std-codes-desc/:stdCodesDescId/edit',
      name: 'StdCodesDescEdit',
      component: StdCodesDescUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/std-codes-desc/:stdCodesDescId/view',
      name: 'StdCodesDescView',
      component: StdCodesDescDetails,
      meta: { authorities: ['ROLE_USER'] }
    }
    ,
    {
      path: '/entity/std-codes-group',
      name: 'StdCodesGroup',
      component: StdCodesGroup,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/std-codes-group/new',
      name: 'StdCodesGroupCreate',
      component: StdCodesGroupUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/std-codes-group/:stdCodesGroupId/edit',
      name: 'StdCodesGroupEdit',
      component: StdCodesGroupUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/std-codes-group/:stdCodesGroupId/view',
      name: 'StdCodesGroupView',
      component: StdCodesGroupDetails,
      meta: { authorities: ['ROLE_USER'] }
    }
    ,
    {
      path: '/entity/std-codes-prop',
      name: 'StdCodesProp',
      component: StdCodesProp,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/std-codes-prop/new',
      name: 'StdCodesPropCreate',
      component: StdCodesPropUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/std-codes-prop/:stdCodesPropId/edit',
      name: 'StdCodesPropEdit',
      component: StdCodesPropUpdate,
      meta: { authorities: ['ROLE_USER'] }
    },
    {
      path: '/entity/std-codes-prop/:stdCodesPropId/view',
      name: 'StdCodesPropView',
      component: StdCodesPropDetails,
      meta: { authorities: ['ROLE_USER'] }
    }
    // jhipster-needle-add-entity-to-router - JHipster will add entities to the router here
  ]
});
