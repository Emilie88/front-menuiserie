import { set, toggle } from "./methods";

const types = {
  success: { color: "success", icon: "mdi-check-circle-outline" },
  info: { color: "info", icon: "mdi-info" },
  warning: { color: "warning", icon: "mdi-warning" },
  error: { color: "error", icon: "mdi-alert-outline" },
};

const actions = {
  show({ commit }, { text, type, details = null }) {
    commit("setText", text);
    commit("setColor", types[`${type}`].color);
    commit("setIcon", types[`${type}`].icon);
    commit("setDetails", details);
    commit("setSnackbar", true);
    commit("setDialog", true);
  },
}

const mutations = {
  setSnackbar: set("snackbar"),
  setText: set("text"),
  setColor: set("color"),
  setIcon: set("icon"),
  setDetails: set("details"),
  setLoading: set("loading"),
  setDrawer: set("drawer"),
  toggleDrawer: toggle("drawer"),
  setDialog: set("dialog"),
  SET_LANG(state, locale) {
    if (state.locales.find(el => el.code === locale)) {
      state.locale = locale
    }
  }
}

const state = () => ({
  snackbar: null,
  text: "",
  color: "",
  icon: "",
  details: null,
  loading: false,
  drawer: null,
  dialog: false,
  locales: [
    {
      code: 'fr',
      name: 'FR'
    },
    {
      code: 'en',
      name: 'EN'
    },
    {
      code: 'ro',
      name: 'Ro'
    }
  ],
  locale: 'fr'
})

const getters = {
  snackbar: (state) => state.snackbar,
  text: (state) => state.text,
  color: (state) => state.color,
  icon: (state) => state.icon,
  details: (state) => state.details,
  loading: (state) => state.loading,
  drawer: (state) => state.drawer,
  dialog: (state) => state.dialog,
}

export default {
  state,
  actions,
  mutations,
  getters,
}
