import React from "react";
import { useNavigation, IResourceComponentsProps } from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";

export const HistoryCreate: React.FC<IResourceComponentsProps> = () => {
    const { list } = useNavigation();

    const {
        refineCore: { onFinish, formLoading },
        register,
        handleSubmit,
        resetField,
        formState: { errors },
    } = useForm();

    return (
        <div style={{ padding: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h1>Table Create</h1>
                <div>
                    <button
                        onClick={() => {
                            list("MakeData");
                        }}
                    >
                        Table
                    </button>
                </div>
            </div>
            <form onSubmit={handleSubmit(onFinish)}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                    }}
                >
                    <label>
                        <span style={{ marginRight: "8px" }}>Title</span>
                        <input
                            type="text"
                            {...register("title", {
                                required: "This field is required",
                            })}
                        />
                        <span style={{ color: "red" }}>
                            {(errors as any)?.title?.message as string}
                        </span>
                    </label>
                    <div>
                        <input type="submit" value="Save" />
                    </div>
                </div>
            </form>
        </div>
    );
};
