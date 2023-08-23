import React from "react";
import { useNavigation, IResourceComponentsProps } from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";

export const HistoryEdit: React.FC<IResourceComponentsProps> = () => {
    const { list } = useNavigation();

    const {
        refineCore: { onFinish, formLoading, queryResult },
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    const categoriesData = queryResult?.data?.data;

    return (
        <div style={{ padding: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h1>Table Edit</h1>
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
                    <div>
                        <input type="submit" value="Save" />
                    </div>
                </div>
            </form>
        </div>
    );
};
