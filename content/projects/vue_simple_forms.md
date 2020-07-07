---
date: 2020-06-30
image: ./images/vue_simple_forms.png
name: Vue Simple Forms
link: https://www.npmjs.com/package/@kendallroth/vue-simple-forms
published: true
slug: vue-simple-forms
status: Active
tags: [web, npm, vuejs, forms]
type: Package
---

`vue-simple-forms` was created from a desire to have a simple way of managing form data and flags in Vue. While validation libraries are common and well built, form data  and flag handlers are less common.

> Simple Vue form state management library (no validation, etc).

The library simply handles tracking the form data and several utility flags, such as whether the form is submitting, loading, or changed. Using a validation libary is highly recommended, and the library works well with `vee-validate`. The library contains two configurable mixins, documentation, and a Jest test suite. The `FormCreateMixin` creates the form and flags with reactive data. The `FormLeaveGuardMixin` prevents route changes while a form has unsaved changes. Coupled with a validation library, this package offers everything that is needed to manage simple form(s) state. I also experimented with publishing the NPM package from GitHub using the new GitHub Actions.
