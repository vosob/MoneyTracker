import { Request, Response } from "express";

type NbuRate = {
  r030: number;
  txt: string;
  rate: number;
  cc: string;
  exchangedate: string;
};

export const getCurrency = async (req: Request, res: Response) => {
  try {
    const r = await fetch(
      "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json",
      { headers: { Accept: "application/json" } }
    );

    if (!r.ok) {
      const body = await r.text();
      return res
        .status(r.status)
        .json({ error: "NBU error", status: r.status, body });
    }

    const data = (await r.json()) as NbuRate[];

    const usd = data.find((x) => x.cc === "USD");
    const eur = data.find((x) => x.cc === "EUR");

    return res.json({ usd, eur });
  } catch (e: any) {
    return res.status(500).json({
      error: "Failed to fetch NBU currency",
      message: e?.message ?? String(e),
    });
  }
};
