import { InputType } from '@storybook/csf'
import { DefaultProps } from 'vue/types/options'

export abstract class ArgTypeUtils {
  // TODO: write doc
  static buildArgTypeFromEnumProp(
    component: Record<string, any>,
    propName: string,
    enumValue: object
  ): InputType | null {
    if (!enumValue)
      throw new Error(
        `ArgTypeUtils Error: The enum passed to the component '${component.__name}' doesn't exists`
      )
    if (!component?.props?.[propName])
      throw new Error(
        `ArgTypeUtils Error: The propName '${propName}' doesn't exists on that component '${component.__name}'`
      )
    return {
      options: Object.values(enumValue),
      defaultValue: component?.props?.[propName]?.default,
    }
  }

  static buildArgTypeFromArrayProp(
    component: Record<string, any>,
    propName: string,
    array: readonly unknown[]
  ): InputType | null {
    if (!array)
      throw new Error(
        `ArgTypeUtils Error: The array passed to the component '${component.__name}' doesn't exists`
      )
    if (!component?.props?.[propName])
      throw new Error(
        `ArgTypeUtils Error: The propName '${propName}' doesn't exists on that component '${component.__name}'`
      )
    return {
      options: array,
      defaultValue: component?.props?.[propName]?.default,
    }
  }

  static buildDefaultArgTypesFromProps(
    props: DefaultProps
  ): { [key: string]: InputType } | {} {
    let argTypes = {}
    for (const [key, value] of Object.entries(props)) {
      if (typeof value.default !== 'undefined') {
        let defaultValue = value.default
        if (typeof value.default === 'function') {
          defaultValue = value.default()
        }
        console.log(key, value, defaultValue)
        argTypes = {
          ...argTypes,
          [key]: { defaultValue },
        }
      }
    }

    return argTypes
  }

  /**
   * This method checks if a prop exists on a component
   * if it exists, it returns the propName
   * @param component
   * @param propName
   */
  static propNameToString(
    component: Record<string, any>,
    propName: string
  ): string {
    if (!component?.props?.[propName]) {
      throw new Error(
        `Prop '${propName}' doesn't exists on the component '${component.__name}'`
      )
    }
    return propName
  }
}
