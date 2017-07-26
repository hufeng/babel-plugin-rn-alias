# babel-plugin-rn-alias
react native need module alias

# Why?

我们十分想念webpack的alias在reactnative中

# getting started

```sh
yarn add babel-plugin-rn-alias --dev
```

```
//.babelrc
{
  "plugins": [
    ["rn-alias", {
      alias: {
        "react": "qm-react",
        "react-native": "qm-react-native"
      }
    }]
  ]
}
```

