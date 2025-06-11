import * as bcrypt from "bcrypt";
import * as dotenv from "dotenv";
import { PrismaClient } from "../../../generated/prisma";

import { User } from "@admin-dashboard/shared";

dotenv.config();

const rounds = process.env?.["SALT_ROUNDS"];

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.$transaction(async tx => {
      const users: User[] = [
        {
          id: "b71f2e5d-21e6-4ad3-bf8a-4f3c2a68d7d1",
          email: "alice.admin@example.com",
          username: "alice123",
          name: "Alice",
          lastName: "Anderson",
          role: "ADMIN",
          organization: "TechNova Inc.",
          locked: false,
          password: "Al!ce1234",
        },
        {
          id: "9a9b5d5e-1f47-42d5-a303-0b3087c43c7b",
          email: "bob.staff@example.com",
          username: "bobby",
          name: "Bob",
          lastName: "Baker",
          role: "STAFF",
          organization: null,
          locked: true,
          password: "B0bby@456",
        },
        {
          id: "8d23e3e2-5df2-4ea4-a849-d08312e8e66e",
          email: "carla.customer@example.com",
          username: "carla.c",
          name: "Carla",
          lastName: "Castillo",
          role: "COSTUMER",
          organization: "SmartHome Co.",
          locked: false,
          password: "Carla#2024",
        },
        {
          id: "d6b6a40b-54b6-4fa7-b3d2-ec1f4a9a1e7c",
          email: "dan.staff@example.com",
          username: "daniel_s",
          name: "Daniel",
          lastName: "Soto",
          role: "STAFF",
          organization: "GreenLeaf Corp.",
          locked: false,
          password: "Dan!el789",
        },
        {
          id: "cc1c478f-b2ee-4cbf-8b15-cb2d58a4b7b9",
          email: "emily.admin@example.com",
          username: "em_admin",
          name: "Emily",
          lastName: "Evans",
          role: "ADMIN",
          organization: null,
          locked: true,
          password: "Em!ly_123",
        },
        {
          id: "a8b4ce44-b601-4c11-b77d-00b7f3fa4ef2",
          email: "frank.customer@example.com",
          username: "frankie",
          name: "Frank",
          lastName: "Fernandez",
          role: "COSTUMER",
          organization: "SmartHome Co.",
          locked: false,
          password: "Fr@nk2025",
        },
        {
          id: "0dbce1ed-e1c2-4f90-94b0-12c98923b9b2",
          email: "gina.staff@example.com",
          username: "gina_staff",
          name: "Gina",
          lastName: "Gomez",
          role: "STAFF",
          organization: null,
          locked: false,
          password: "Gin@_890",
        },
        {
          id: "c3e66ff9-5cd1-434f-b842-f2e9dece9b01",
          email: "henry.customer@example.com",
          username: "henry.h",
          name: "Henry",
          lastName: "Hernandez",
          role: "COSTUMER",
          organization: "NextGen Retail",
          locked: true,
          password: "HenrY#567",
        },
        {
          id: "27b8cb19-3c60-4f9d-896d-9f98b7b0c4ab",
          email: "isabel.admin@example.com",
          username: "isa_admin",
          name: "Isabel",
          lastName: "Ibarra",
          role: "ADMIN",
          organization: "TechNova Inc.",
          locked: false,
          password: "Is@bel321",
        },
        {
          id: "3dc68e2d-50ab-4c55-b361-d67e85c6608d",
          email: "jack.staff@example.com",
          username: "jackstaff",
          name: "Jack",
          lastName: "Jimenez",
          role: "STAFF",
          organization: "BlueOcean Solutions",
          locked: true,
          password: "J@ckPass9",
        },
        {
          id: "e1c69c2e-8b42-4a5d-aaf9-fbca3fa91e8d",
          email: "lucas.guest@example.com",
          username: "lucas_g",
          name: "Lucas",
          lastName: "Gonzalez",
          role: "COSTUMER",
          organization: null,
          locked: false,
          password: "LuC@s!777",
        },
        {
          id: "72b5b3c0-61d0-4e39-a835-d3550e5fe171",
          email: "marie.locked@example.com",
          username: "marie_l",
          name: "Marie",
          lastName: "Lopez",
          role: "STAFF",
          organization: "NextGen Retail",
          locked: true,
          password: "M@rie2024",
        },
      ];

      for (const user of users) {
        try {
          user.password = await hash(user.password);
          const newUser = await prisma.user.create({ data: user });
          console.log("Created user:", newUser.username);
        } catch (error) {
          console.error("Error creating user:", error);
        }
      }
    });
  } catch (error) {
    throw new Error(`Database seeding failed: ${(error as Error).message}`);
  } finally {
    await prisma.$disconnect();
  }
}

async function hash(password: string): Promise<string> {
  if (!rounds) throw new Error("SALT_ROUNDS are not defined");

  const salt = await bcrypt.genSalt(Number(rounds));
  return bcrypt.hash(password, salt);
}

void main();
