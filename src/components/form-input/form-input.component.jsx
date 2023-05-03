import { FormInputLabel } from './form-input.styles';
import { Input } from './form-input.styles';
import { Group } from './form-input.styles';

export const FormInput = ({ label, ...otherProps }) => {
    return (
        <Group>
            <Input {...otherProps} />
            {label && (
                <FormInputLabel shrink={otherProps.value.length}>
                    {label}
                </FormInputLabel>
            )}
        </Group>
    );
};
