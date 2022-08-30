export type Response =  {
  data?:  {
    materials?: [
      {
        id: number | undefined
        description: string | undefined
        url_thumbnail: string | undefined
        line: string | undefined
        status?: number | undefined
        created_at?: string | undefined
      }
    ];
    id ?: String
  };
}
