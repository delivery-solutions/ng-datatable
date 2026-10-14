// @ts-check
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
      },
    },
    extends: [...angular.configs.tsRecommended],
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/component-selector": "off",
      "@angular-eslint/directive-selector": "off",
      // Added to the recommended set after angular-eslint 16. The library and demo stay
      // NgModule-based with Eager change detection and constructor injection on purpose.
      "@angular-eslint/prefer-standalone": "off",
      "@angular-eslint/prefer-on-push-component-change-detection": "off",
      "@angular-eslint/prefer-inject": "off",
    },
  },
  {
    // The library keeps its original public names (mf* selectors, renamed inputs/outputs).
    files: ["projects/ng-datatable/**/*.ts"],
    rules: {
      "@angular-eslint/directive-class-suffix": "off",
      "@angular-eslint/component-class-suffix": "off",
      "@angular-eslint/no-conflicting-lifecycle": "off",
      "@angular-eslint/no-input-rename": "off",
      "@angular-eslint/no-output-rename": "off",
    },
  },
  {
    files: ["**/*.html"],
    extends: [...angular.configs.templateRecommended],
    rules: {
      // Templates keep *ngIf/*ngFor so the published library matches 15.0.2's output.
      "@angular-eslint/template/prefer-control-flow": "off",
    },
  }
);
