import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    await prisma.games.createMany({
        data: [
            {
                teams: "fluminense X botafogo",
                result: "empate",
                stadium: "maracanã"
            },
            {
                teams: "fluminense X nova iguaçu",
                result: "vitória",
                stadium: "maracanã"
            },
            {
                teams: "fluminense X guarani",
                result: "vitória",
                stadium: "engenhão"
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