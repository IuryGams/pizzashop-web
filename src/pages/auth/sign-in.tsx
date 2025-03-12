import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import {useForm} from "react-hook-form"
import { Link } from "react-router-dom";
import { toast } from "sonner";
import {z} from "zod";

const signInSchema = z.object({
    email: z.string().email()
})

type SignInFormType = z.infer<typeof signInSchema>;

export function SignIn() {
    const {
        register, 
        handleSubmit,
        formState: {
            isSubmitting
        }
    } = useForm<SignInFormType>();

    async function handleSignIn(data: SignInFormType) {
        try {
            console.log(data);
            await new Promise(resolver => setTimeout(resolver, 2000))
            
            toast.success("Enviamos um link para o seu e-mail.")
        } catch (error) {
            toast.error("Email não cadastrado!")
        }

    }

    return (
        <>
            <div className="p-8">
                <Button variant={"outline"} asChild>
                    <Link to="/sign-up" className="absolute right-8 top-8">
                        Novo estabelecimento
                    </Link>
                </Button>

                <div className="w-[350px] flex flex-col justify-center gap-6">
                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Acessar painel
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Acompanhe suas vendas pelo painel do parceiro!
                        </p>
                    </div>

                    <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
                        <div className="flex flex-col gap-0.5 space-y-1">
                            <Label htmlFor="email">Seu e-mail</Label>
                            <Input 
                                className="rounded-xs"
                                type="email" 
                                id="email"
                                {...register("email")}
                            />
                        </div>

                        <Button variant={"destructive"}  className="w-full" disabled={isSubmitting} type="submit">
                            Acessar painel
                        </Button>

                    </form>
                </div>
            </div>
        </>
    )
}