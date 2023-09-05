import { NextRequest, NextResponse } from "next/server";

export const config = {
    runtime: 'edge',
}

const handler = (req: NextRequest) => {
    return NextResponse.json({
        mesage: 'Hello world from edge!',
        type: 'edge'
    });
};

export default handler;