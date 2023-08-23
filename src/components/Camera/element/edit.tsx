import React from "react";
import {
    useNavigation,
    IResourceComponentsProps,
    useTranslate,
    useSelect,
} from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";

export const PostEdit: React.FC<IResourceComponentsProps> = () => {
    const translate = useTranslate();

    const { list } = useNavigation();

    const {
        refineCore: { onFinish, formLoading, queryResult },
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    const postsData = queryResult?.data?.data;

    const { options: categoryOptions } = useSelect({
        resource: "categories",
        defaultValue: postsData?.category?.id,
    });

    React.useEffect(() => {
        setValue("category.id", postsData?.category?.id);
    }, [categoryOptions]);

    const { options: userOptions } = useSelect({
        resource: "users",
        defaultValue: postsData?.user?.id,
        optionLabel: "firstName",
    });

    React.useEffect(() => {
        setValue("user.id", postsData?.user?.id);
    }, [userOptions]);

    const { options: tagsOptions } = useSelect({
        resource: "tags",
        defaultValue: postsData?.tags,
    });

    React.useEffect(() => {
        setValue("tags", postsData?.tags?.id);
    }, [tagsOptions]);

    return (
        <div>
            <label>
                        <span style={{ marginRight: "8px" }}>
                            {translate("posts.fields.user")}
                        </span>
                        <select
                            placeholder="Select user"
                            {...register("user.id", {
                                required: "This field is required",
                            })}
                        >
                            {userOptions?.map((option) => (
                                <option value={option.value} key={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <span style={{ color: "red" }}>
                            {(errors as any)?.user?.id?.message as string}
                        </span>
                    </label>
        </div>
    );
}