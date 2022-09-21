import { InputType } from '@storybook/csf'

export abstract class ArgTypeUtils {
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
