export class LoggerService {
    LogMessage(name: string, status: string) {
        console.log(`A new user with name ${ name } and with status ${ status } is added to List!`);
    }
}