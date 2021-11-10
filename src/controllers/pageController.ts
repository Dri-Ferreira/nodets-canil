import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
    res.send('tamo foda')
    // res.render('pages/page)
};

export const dogs = (req: Request, res: Response) => {
    // res.render('page/page)
};

export const cats = (req: Request, res: Response) => {
    // res.render('pages/pages)
};

export const fishes = (req: Request, res: Response) => {
    // res.render('pages/pages)
}