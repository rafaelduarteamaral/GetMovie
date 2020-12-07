export default interface Service<IRequest, IResponse> {
    execute(request?: IRequest, response?: IResponse): Promise<IResponse> | IResponse;
}
