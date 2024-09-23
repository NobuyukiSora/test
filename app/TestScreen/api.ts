// pages/api/proxy.js
export default async function handler(req: { method: any; }, res: { setHeader: (arg0: string, arg1: string) => void; status: (arg0: number) => { (): any; new(): any; json: { (arg0: any): void; new(): any; }; }; }) {
    const response = await fetch('http://127.0.0.1:8000/sharepoint/read_action_1', {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    const data = await response.json();
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.status(response.status).json(data);
  }
  