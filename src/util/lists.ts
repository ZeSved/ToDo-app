import { manageStorage } from "./manageStorage"

import { Custom, ProfileType } from "../types"

export const appearance = {
  mode: {
    lightMode: false,
    darkMode: true,
    customMode: false
  },

  lightModeTheme: [
    {
      name: 'mainColor',
      color: '#000000',
      content: ''
    },
    {
      name: 'secondaryColor',
      color: '#ffffff',
      content: ''
    },
    {
      name: 'callToActionColor',
      color: '#3f3f3f',
      content: ''
    },
    {
      name: 'textColor',
      color: '#000000',
      content: ''
    },
  ],

  darkModeTheme: [
    {
      name: 'mainColor',
      color: '#000000',
      content: ''
    },
    {
      name: 'secondaryColor',
      color: '#3f3f3f',
      content: ''
    },
    {
      name: 'callToActionColor',
      color: '#000000',
      content: ''
    },
    {
      name: 'textColor',
      color: '#ffffff',
      content: ''
    },
  ],

  buttons: [
    {
      func: ((settings: Custom[]) => {
        manageStorage('set', 'settings', JSON.stringify(settings))
      }),

      content: 'Save Profile'
    },

    {
      content: 'Load Profile'
    }
  ],
}

export const defaultProfiles: ProfileType[] = [
  {
    value: appearance.lightModeTheme,
    name: 'Light mode',
  },
  {
    value: appearance.darkModeTheme,
    name: 'Dark mode',
  },
]

export const customProfiles: ProfileType[] = [
  // {
  //   value: appearance.lightModeTheme,
  //   name: 'Light mode',
  // },
  // {
  //   value: appearance.lightModeTheme,
  //   name: 'ht mo',
  // },
  // {
  //   value: appearance.lightModeTheme,
  //   name: 'mode',
  // },
  // {
  //   value: appearance.lightModeTheme,
  //   name: 'Light',
  // }
]