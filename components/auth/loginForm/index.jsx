"use client"

import Link from "next/link";
import {useForm} from "react-hook-form"

const LoginForm = () => {

    const {
        register,
        handleSubmit,
        formState:{errors},
        watch
    } = useForm({})

    const formSubmitter = () => {
        
        const formData = {
            email:watch("email"),
            password:watch("password"),
        }
        console.log("ok",formData)
    };


    return(
        <section className="container mx-auto flex justify-center items-center">
           <form onSubmit={handleSubmit(formSubmitter)} className="flex flex-col m-12 w-[30rem] gap-8 bg-zinc-100 p-12 rounded-md">
            <div className="flex justify-center items-center gap-6">
                <h1 className="text-lg text-center text-blue-400">ورود به حساب</h1>
                <Link className="bg-blue-500 text-white px-2 py-1 rounded-md" href={"/register"} >ثبت نام در سایت</Link>
            </div>
            <div className="flex flex-col gap-1">
            <input type="text" placeholder="ایمیل" autoComplete="off" className="p-2 rounded-md w-full outline-none border-zinc-400 border-2 focus:border-orange-400" 
            {
             ...register("email",{
                required:true,
                minLength:11,
                pattern: /^$|^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
             })
            }
            />
            {errors.email && errors.email.type =="required" && 
            <div className="text-rose-500 text-sm" >ایمیل وارد نشده است</div>
            }
            {errors.email && errors.email.type =="minLength" && 
            <div className="text-rose-500 text-sm" >تعداد کاراکترهای ایمیل وارد شده باید بیشتر از 11 حرف باشد</div>
            }
             {errors.email && errors.email.type =="pattern" && 
            <div className="text-rose-500 text-sm" >لطفا یک ایمیل معتبر وارد کنید</div>
            }
            </div>
            <div className="flex flex-col gap-1">
            <input type="password"  placeholder="رمز عبور" autoComplete="off" className="p-2 rounded-md w-full outline-none border-zinc-400 border-2 focus:border-orange-400" 
            {
             ...register("password",{
                required:true,
                minLength:8,
                pattern:/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=<>?/])[A-Za-z\d!@#$%^&*()_\-+=<>?/]{8,}$/
             })
            }
            />
            {errors.password && errors.password.type =="required" && 
            <div className="text-rose-500 text-sm" >لطفا رمز عبور خود را وارد کنید</div>
            }
            {errors.password && errors.password.type =="pattern" &&
            <div className="text-rose-500 text-sm">پسورد وارد شده باید دارای حداقل یک حرف بزرگ انگلیسی و یک حرف کوچک انگلیسی و کلمات حساس مانند !@#$%^&* باشد </div>
            }
            {errors.password && errors.password.type == "minLength" &&
            <div className="text-rose-500 text-sm" >رمز عبور انتخابی باید بیشتر  از 8 عدد باشد</div>
            }
            </div>

            <button type="submit" className="bg-blue-500 text-white w-full rounded-md p-2 transition-all duration-500 hover:bg-blue-600">ورود به حساب کاربری</button>
           </form>
        </section>
    )
};

export default LoginForm; 