/*"use server";
import { resolve } from 'path';
import postgres from 'postgres';
const sql = postgres(process.env.POSTGRES_URL!);

export async function getPulseChartHosts() {
    try {

    } catch(error) {

    }
}

export async function getPulseChartData() {
    try {
        console.log('Getting pulse charts');
        const data = await sql<Charts[]>`SELECT * FROM revenue`;
        return data;
    } catch (error) {

    }
};*/