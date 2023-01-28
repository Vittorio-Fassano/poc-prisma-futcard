import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    await prisma.games.createMany({
        data: [
            {
                teams: "fluminense X botafogo",
                result: 2,
                stadium: 1
            },
            {
                teams: "fluminense X nova iguaçu",
                result: 1,
                stadium: 1
            },
            {
                teams: "fluminense X guarani",
                result: 1,
                stadium: 2
            },
        ]
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });