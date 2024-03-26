"use client"

import Link from "next/link";
import {useForm} from "react-hook-form"

const RegisterForm = () => {

    const {
        register,
        handleSubmit,
        formState:{errors},
        watch
    } = useForm({})

    const formSubmitter = () => {
        
        const formData = {
            username:watch("username"),
            displayname:watch("displayname"),
            email:watch("email"),
            password:watch("password"),
            rePassword:watch("rePassword")
        }

        console.log("ok",formData)

    };


    return(
        <section className="container mx-auto flex justify-center items-center">
           <form onSubmit={handleSubmit(formSubmitter)} className="flex flex-col m-12 w-[30rem] gap-8 bg-zinc-100 p-12 rounded-md">
            <div className="flex justify-center items-center gap-6">
                <h1 className="text-lg text-center text-blue-400">ثبت نام در سایت</h1>
                <Link className="bg-blue-500 text-white px-2 py-1 rounded-md" href={"/login"} >ورود به حساب</Link>
            </div>
            <div className="flex flex-col gap-1">
            <input type="text" placeholder="نام کاربری" autoComplete="off" className="p-2 rounded-md w-full outline-none border-zinc-400 border-2 focus:border-orange-400" 
            {
             ...register("username",{
                required:true,
                maxLength:20,
                minLength:6
             })
            }
            />
            {errors.username && errors.username.type =="required" && 
            <div className="text-rose-500 text-sm" >نام کاربری وارد نشده است</div>
            }
            {errors.username && errors.username.type =="maxLength" &&
            <div className="text-rose-500 text-sm">نام کاربری باید کمتر از 20 کارکتر باشد</div>
            }
            {errors.username && errors.username.type == "minLength" &&
            <div className="text-rose-500 text-sm" >نام کاربری باید بیشتر از 6 کاراکتر باشد</div>
            }
            </div>
            <div className="flex flex-col gap-1">
            <input type="text" placeholder="نام نمایشی" autoComplete="off" className="p-2 rounded-md w-full outline-none border-zinc-400 border-2 focus:border-orange-400" 
            {
             ...register("displayname",{
                required:true,
                maxLength:20,
                minLength:6
             })
            }
            />
            {errors.displayname && errors.displayname.type =="required" && 
            <div className="text-rose-500 text-sm" >نام نمایشی وارد نشده است</div>
            }
            {errors.displayname && errors.displayname.type =="maxLength" &&
            <div className="text-rose-500 text-sm">نام نمایشی باید کمتر از 20 کارکتر باشد</div>
            }
            {errors.displayname && errors.displayname.type == "minLength" &&
            <div className="text-rose-500 text-sm" >نام نمایشی باید بیشتر از 6 کاراکتر باشد</div>
            }
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
            <div className="flex flex-col gap-1">
            <input type="password"  placeholder="تکرار رمز عبور" autoComplete="off" className="p-2 rounded-md w-full outline-none border-zinc-400 border-2 focus:border-orange-400" 
            {
             ...register("rePassword",{
                required:true,
                validate:(val)=>val===watch("password")
             })
            }
            />
            {errors.rePassword && errors.rePassword.type =="required" && 
            <div className="text-rose-500 text-sm" >رمز خود را بار دیگر در اینجا تایپ کنید</div>
            }
            {errors.rePassword && errors.rePassword.type =="validate" && 
            <div className="text-rose-500 text-sm" >تکرار رمز عبور با رمز عبور وارد شده یکی نیست</div>
            }
            </div>
            <button type="submit" className="bg-blue-500 text-white w-full rounded-md p-2 transition-all duration-500 hover:bg-blue-600">ثبت نام در سایت</button>
           </form>
        </section>
    )
};

export default RegisterForm; 