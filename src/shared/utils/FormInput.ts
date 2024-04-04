import React, {useState} from "react";

export type InputErrorType = string | null;

export class FormInput<T> {
    value: T;
    setValue: React.Dispatch<React.SetStateAction<T>>;
    error: InputErrorType;
    private setError: React.Dispatch<React.SetStateAction<InputErrorType>>;
    private validateMethod;

    constructor(
        {
            init,
            validateMethod
        }: {
            init: T,
            validateMethod?: (value: T | null) => string | null
        }
    ) {
        [this.value, this.setValue] = useState<T>(init);
        [this.error, this.setError] = useState<InputErrorType>(null);
        this.validateMethod = validateMethod;
    }

    validate(): boolean {
        if (!this.validateMethod) {
            if (!this.value) {
                this.setError('Требуется заполнить поле!');
                return false;
            }
            return true;
        }

        const validatedError = this.validateMethod(this.value);
        this.setError(validatedError);
        return !!validatedError;
    };

    resetError() {
        this.setError(null);
    }
}
