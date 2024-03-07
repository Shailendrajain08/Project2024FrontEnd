# **Creating a unique product identity by crafting a custom design system(CDS) for UI**

This document cum guide has been created to answer a lot of questions that have come up when we as a UI team were looking for the best approach to implementing theming on the HireCoder client platform. We aim to answer a few **business questions** and also give an understanding of what a **Custom Design System** is and a **developer's perspective** toward coding the ideal CDS for the HireCoder Product.

### The Business Perspective

As we head towards building our custom design theme, it becomes important for us to understand its importance in the first place and how we advance ourselves with our UI development.

**Why do we need a custom design system?**

A custom design system is essential because it enables a brand to establish a unique and consistent visual identity across its products and services. A few out-of-the-box advantages include

- **Brand Uniqueness** - you don’t look like your competitors / you come across differently.
- **Consistency** - maintain a consistent look and feel.
- **Efficiency** - streamline the design and development process by providing reusable components and guidelines.
- **User Experience** - enhance the user experience, making it more intuitive and user-friendly.
- **Scalability** - as a brand grows, a custom design system can easily adapt to accommodate new products, features, and platforms while maintaining a coherent identity.

**What do we need to incorporate a custom design system into our product?**

The design system speaks for the product. The online presence of the product is what we will be eyeing for the context of this document.

The CDS will have to be made on two fronts:

- Design Team- The goal is to provide a **unique product-fetting UI design keeping material guidelines in mind.**
- Development Team - The goal is to **deliver a pixel-perfect user interface** from the provided designs.

### **The Developer Perspective**

It is important to understand a few aspects of building our own Custom Design System. Let’s understand further by knowing the technologies we are using for the product

**Design Guidelines**: Google’s Material Design

**UI Component Library**: MUI React.

**What are Google’s Material Design Guidelines?**

It’s the result of decades worth of effort by expert teams. It is a comprehensive set of design principles, guidelines, and best practices for creating user interfaces that follow the Material Design philosophy. Apart from this, we have a few more reasons to use these guidelines:

- It focuses on realistic lighting, physics, and motion to create a tactile and intuitive user experience.
- It provides detailed information on the elevation, depth, and color, to help designers create a consistent and visually appealing UI.

From the above description of the design guidelines, it makes sense for us to build our CDS over Google’s Material Design Guidelines rather than building our guidelines. We should just use these guidelines and ensure our time is spent on making the product and not the guidelines (unless we want to challenge Google’s effort). As of the date of this document, we as a team have no doubt or second thoughts on using these guidelines. On both fronts (design and dev), this consistency shall be religiously maintained. We will achieve our desired design results with a UI library that is built upon these guidelines - MUI or Material UI - React.

**What is Material UI or MUI React?**

Material UI is an open-source React component library that implements **Google's Material Design**. It includes a comprehensive collection of prebuilt components ready for use in production right out of the box. Material UI is beautiful by design and **features a suite of customization options** that make it easy to implement our **custom design system** on top of the available UI components.

### **How do we plan on using MUI to build our CDS? The “How” part.**

**Ground Rules:**

1. The design is expected to be 100% material-compliant - meaning, if you see any inconsistencies from the designs provided by the designer, or if the designs are stepping away from MUI for the **UX**. **Not the UI. The UX.** You are required to **report** it at the earliest stage.
2. The code should not break MUI UX - an extra effort should be taken to ensure that the MUI UX is not broken. Let me give some examples to further shed some light on this:
   1. The button on click should have a ripple effect.
   2. The input field when clicked into, should highlight itself.
   3. The input field on clicking away should not be highlighted as it was.

I can give several more examples at this point. But I believe you have understood what I mean.

At this point, it is important to note that as a team, we have decided to implement the Theming **globally** for the project. Shedding some light on this further:

#### Global Theming

**For every single UI component that looks and feels the same in the entire project, we will use Global Theming for the project.**

Useful link(s): https://mui.com/material-ui/customization/theming/

- Folder placement for project global theming: `src/theme`

- Enter point for theming: `src/App.tsx` & the code handling it:

  ```
  import { CDS_HIRCDR } from './theme';

  const [themeMode, setThemeMode] = useState('light'); // or 'dark'

  const handleThemeToggle = () => {
  	setThemeMode(themeMode === 'light' ? 'dark' : 'light');
  };

    return (
      <ThemeProvider theme={CDS_HIRCDR(themeMode)}> ...
  ```

- Folder structuring for `src/theme`. What goes where?

  - `src/theme/palette` - contains files for light and dark mode themes. It is important to note:
    - The light and dark themes need to be changed only here in their respective files and it will reflect into all the components.
    - This also brings us to a point where the developers need to **ensure no colors are passed into classes that override default MUI theme colors**.

#### Component Wrappers

**Wrappers for the component look and feel will be created if and only if we have a component that looks different from its peer components in the entire project**.

Useful Link(s): https://mui.com/material-ui/customization/how-to-customize/#2-reusable-component.

Example: A button that appears to the user with an animation. MUI does not provide it out of the box so we will create wrappers for such UI features that do not look like their peers. Noteworthy:

- Folder placement for project global theming: `src/components/common` - Bear in mind that this button can be used in more than one place in the project and hence it has been decided to be put into the `common` folder.
- Justification with the Figma design link shall be provided in a `.md` file as a way to ease PR reviews and future understanding for devs - this will look like - `src/components/common/AnimatedButton/readme.md`.
