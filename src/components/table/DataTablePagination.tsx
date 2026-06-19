import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

interface IDataTablePaginationProps {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}

const DataTablePagination = ({
    currentPage,
    totalPages,
    onPageChange,
}: IDataTablePaginationProps) => {


    const generatePages = () => {
        const pages: (number | "ellipsis")[] = [];


        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        }
        else {
            if (currentPage <= 3) {
                pages.push(1, 2, 3, "ellipsis", totalPages);
            }

            else if (currentPage >= totalPages - 2) {
                pages.push(1, "ellipsis", totalPages - 2, totalPages - 1, totalPages);
            }
            else {
                pages.push(
                    1,
                    "ellipsis",
                    currentPage,
                    "ellipsis",
                    totalPages
                );
            }
        }

        return pages;
    }


    return (
        <Pagination className=" bg-muted flex justify-end py-1">
            <PaginationContent>

                {/* Previous */}
                <PaginationItem>
                    <PaginationPrevious
                        className={`${currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"
                            }`}
                        onClick={() =>
                            currentPage > 1 &&
                            onPageChange(currentPage - 1)
                        }
                    />
                </PaginationItem>

                {/* Pages */}
                {
                    generatePages().map((page, idx) => (
                        page === "ellipsis" ? (
                            <PaginationItem key={idx}>
                                <PaginationEllipsis />
                            </PaginationItem>
                        ) : (
                            <PaginationItem key={page}>
                                <PaginationLink
                                    className="cursor-pointer"
                                    isActive={page === currentPage}
                                    onClick={() =>
                                        onPageChange(page)
                                    }
                                >
                                    {page}
                                </PaginationLink>
                            </PaginationItem>
                        )
                    ))
                }

                {/* Next */}
                <PaginationItem>
                    <PaginationNext
                        className={`${currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"
                            }`}
                        onClick={() =>
                            currentPage < totalPages &&
                            onPageChange(currentPage + 1)
                        }
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}

export default DataTablePagination
