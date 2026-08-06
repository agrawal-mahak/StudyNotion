import { useState } from "react"
import { useForm } from "react-hook-form"
import { useSelector } from "react-redux"
import { createCategory } from "../../../services/operations/courseDetailsAPI"
import IconBtn from "../../common/IconBtn"

export default function AddCategory() {
  const { token } = useSelector((state) => state.auth)
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    setLoading(true)
    const result = await createCategory(data, token)
    if (result) {
      reset()
    }
    setLoading(false)
  }

  return (
    <div className="text-white max-w-[600px] mx-auto p-6 rounded-md bg-richblack-800 border border-richblack-700">
      <h1 className="text-2xl font-semibold text-richblack-5 mb-6">
        Create New Category
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col space-y-2">
          <label className="text-sm text-richblack-5" htmlFor="name">
            Category Name <sup className="text-pink-200">*</sup>
          </label>
          <input
            id="name"
            placeholder="Enter Category Name (e.g. Web Development)"
            {...register("name", { required: true })}
            className="form-style w-full"
          />
          {errors.name && (
            <span className="ml-2 text-xs tracking-wide text-pink-200">
              Category Name is required
            </span>
          )}
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm text-richblack-5" htmlFor="description">
            Description <sup className="text-pink-200">*</sup>
          </label>
          <textarea
            id="description"
            placeholder="Enter Category Description"
            {...register("description", { required: true })}
            className="form-style resize-x-none min-h-[120px] w-full"
          />
          {errors.description && (
            <span className="ml-2 text-xs tracking-wide text-pink-200">
              Category Description is required
            </span>
          )}
        </div>

        <div className="flex justify-end gap-x-2">
          <IconBtn disabled={loading} text="Create Category" type="submit" />
        </div>
      </form>
    </div>
  )
}
