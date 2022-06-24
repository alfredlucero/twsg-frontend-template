import { Theme } from "@twilio-paste/core/theme";

export const globalTypes = {
  theme: {
    name: "Paste Theme",
    description: "Global theme for components",
    defaultValue: "default",
    toolbar: {
      // All available icons
      // https://github.com/storybookjs/storybook/blob/master/lib/components/src/icon/icons.tsx
      icon: "paintbrush",
      // array of plain string values or MenuItem shape (see below)
      items: ["default", "console", "sendgrid"],
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  rootStyles: {
    height: "100vh",
    padding: "60px",
    backgroundColor: "white",
  },
};

export const decorators = [
  (Story, context) => {
    const theme = context.globals.theme;

    return (
      <Theme.Provider theme={theme}>
        <div style={context.parameters.rootStyles}>
          <Story />
        </div>
      </Theme.Provider>
    );
  },
];
