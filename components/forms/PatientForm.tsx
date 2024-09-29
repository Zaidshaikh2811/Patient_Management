"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Form } from "@/components/ui/form"
import CustomFormField from "../customFormField"
import SubmitButton from "../SubmitButton"
import { useState } from "react"
import { userFormValidation } from "@/lib/validation"
import { log } from "node:console"



export enum FormFieldType {
    INPUT = "input",
    TEXTAREA = 'textarea',
    PHONE_INPUT = "phoneInput",
    CHECKBOX = "checkbox",
    DATE_PICKER = "datePicker",
    SELECT = "select",
    SKELETON = "skeleton"
}


function PatientForm() {

    const [isLoading, setIsLoading] = useState(false)

    // 1. Define your form.
    const form = useForm<z.infer<typeof userFormValidation>>({
        resolver: zodResolver(userFormValidation),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit({ name, email, phone }: z.infer<typeof userFormValidation>) {
        setIsLoading(true)

        try {
            const user = { name, email, phone }


        } catch (error) {
            console.log(error);

        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
                <section className="mb-12 space-y-4">

                    <h1 className="header">Hi There</h1>
                    <p className="text-dark-700">Schedule Your First Appointment</p>
                </section>

                <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    name="name"
                    label="Full Name"
                    placeholder="John Doe"
                    iconSrc="/assets/icons/user.svg"
                    iconAlt="user"
                    control={form.control} />


                <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    name="email"
                    label="Email"
                    placeholder="JohnDoe@gmail.com"
                    iconSrc="/assets/icons/email.svg"
                    iconAlt="email"
                    control={form.control} />
                <CustomFormField
                    fieldType={FormFieldType.PHONE_INPUT}
                    name="phone"
                    label="Phone Number"
                    placeholder="(123) 290-203"

                    control={form.control} />

                <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
            </form>
        </Form>
    )
}


export default PatientForm;