export class ServiceAsClass {
    
    public async getUsers(): Promise<Response> {
        return await fetch('./api/users')
    }
}