import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { Button } from "./ui/button";

export interface PaginationProps {
    pageIndex: number;
    totalCount: number;
    perPage: number;
}

export function Pagination({ pageIndex, perPage, totalCount }: PaginationProps) {
    
    const pages = Math.ceil(totalCount / perPage) || 1;

    return (
        <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
                Total de {totalCount} item(s)
            </span>

            <div className="flex items-center gap-6 lg:gap-8">
                <span className="text-sm font-medium">
                    Página {pageIndex + 1} de {pages}
                </span>
                <div className="flex items-center gap-2">
                    <Button title="Primeira página" variant="outline" className="h-8 w-8 p-0 cursor-pointer rounded">
                        <ChevronsLeft className="h-4 w-4" />
                        <span className="sr-only" >Primeira página</span>
                    </Button>
                    <Button title="Página anterior" variant="outline" className="h-8 w-8 p-0 cursor-pointer rounded">
                        <ChevronLeft className="h-4 w-4" />
                        <span className="sr-only" >Página anterior</span>
                    </Button>
                    <Button title="Próxima página" variant="outline" className="h-8 w-8 p-0 cursor-pointer rounded">
                        <ChevronRight className="h-4 w-4" />
                        <span className="sr-only" >Próxima página</span>
                    </Button>
                    <Button title="Última página" variant="outline" className="h-8 w-8 p-0 cursor-pointer rounded">
                        <ChevronsRight className="h-4 w-4" />
                        <span className="sr-only" >Última página</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}
