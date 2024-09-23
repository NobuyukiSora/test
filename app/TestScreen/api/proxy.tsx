export default async function handler(req: { method: string; body: any; }, res: { setHeader: (arg0: string, arg1: string | string[]) => void; status: (arg0: number) => { (): any; new(): any; json: { (arg0: any): void; new(): any; }; end: { (arg0: string): void; new(): any; }; }; }) {
    if (req.method === 'POST') {
      const response = await fetch('http://127.0.0.1:8000/sharepoint/read_action_1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body), // Ensure you're sending the request body
      });
  
      const data = await response.json();
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(response.status).json(data);
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  