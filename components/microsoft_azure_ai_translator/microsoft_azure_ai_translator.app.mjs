export default {
  type: "app",
  app: "microsoft_azure_ai_translator",
  propDefinitions: {},
  methods: {
    // this.$auth contains connected account data
    authKeys() {
      console.log(Object.keys(this.$auth));
    },
  },
};
