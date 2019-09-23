import React from 'react';

export const renderInput = (
    {
        input,
        label,
        type,
        inputClassName,
        containerClassName,
        meta: {
            touched,
            active,
            error
        }
    }) => (
    <div className={containerClassName}>
        <input
            {...input}
            placeholder={label}
            type={type}
            className={inputClassName}
            style={active || touched ?
                error ?
                    {border: '1px solid red'} :
                    {border: '1px solid green'} :
                null
            }
        />
        {active || touched ? error ? <p style={{color: 'red'}}>{error}</p> : null : null}
    </div>
);