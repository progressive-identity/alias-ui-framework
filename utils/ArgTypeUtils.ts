import { InputType } from '@storybook/csf'

export abstract class ArgTypeUtils {
    static buildArgTypeFromEnumProp(Component: Record<string, any>, propName: string, enumValue: object): InputType | null {
        if (!enumValue) throw new Error ("ArgTypeUtils Error: The enum passed to the Component doesn't exists")
        if(!Component?.props?.[propName]) throw new Error (`ArgTypeUtils Error: The propName '${propName}' doesn't exists on that component`)
        return {
            options: Object.values(enumValue),
            defaultValue: Component?.props?.[propName]?.default
        }
    }
}
