import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import {useForm} from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import {z} from "zod";

const signUpSchema = z.object({
    email: z.string().email(),
    restaurantName: z.string(),
    managerName: z.string(),
    phone: z.string()
})

type SignUpFormType = z.infer<typeof signUpSchema>;

export function SignUp() {
    const navigate = useNavigate();

    const {
        register, 
        handleSubmit,
        formState: {
            isSubmitting
        }
    } = useForm<SignUpFormType>();

    async function handleSignUp(data: SignUpFormType) {
        try {
            console.log(data)
            await new Promise(resolver => setTimeout(resolver, 2000))
            
            toast.success("Restaurante cadastrado com sucesso.", {
                action: {
                    label: "Login",
                    onClick: () => navigate("/sign-in")
                }
            })
        } catch (error) {
            toast.error("Erro ao cadastrar restaurante.")
        }

    }

    return (
        <>
            <div className="p-8">
                <Button variant={"outline"} className="rounded-xs" asChild>
                    <Link to="/sign-in" className="absolute right-8 top-8">
                        Fazer login
                    </Link>
                </Button>
                <div className="w-[350px] flex flex-col justify-center gap-6">

                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Criar conta grátias
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Seja um parceiro e comece a suas vendas!
                        </p>
                    </div>

                    <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
                        <div className="flex flex-col gap-0.5 space-y-1">
                            <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
                            <Input 
                                className="rounded-xs"
                                type="text" 
                                id="restaurantName"
                                {...register("restaurantName")}
                            />
                        </div>
                        <div className="flex flex-col gap-0.5 space-y-1">
                            <Label htmlFor="managerName">Seu nome</Label>
                            <Input 
                                className="rounded-xs"
                                type="text" 
                                id="managerName"
                                {...register("managerName")}
                            />
                        </div>
                        <div className="flex flex-col gap-0.5 space-y-1">
                            <Label htmlFor="email">Seu e-mail</Label>
                            <Input 
                                className="rounded-xs"
                                type="email" 
                                id="email"
                                {...register("email")}
                            />
                        </div>
                        <div className="flex flex-col gap-0.5 space-y-1">
                            <Label htmlFor="phone">Seu celular</Label>
                            <Input 
                                className="rounded-xs"
                                type="tel" 
                                id="phone"
                                {...register("phone")}
                            />
                        </div>

                        <Button variant={"destructive"}  className="w-full cursor-pointer rounded-xs" disabled={isSubmitting} type="submit">
                            Acessar painel
                        </Button>

                        <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
                            Ao continuar, você concorda com nossos <a className="underline underline-offset-4" href="">Termos de serviço</a> e <a className="underline underline-offset-4" href="">políticas de privacidade</a>.
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}