type Props = {
  query: string
  enablePreview: Function
}

export default function ({ query, enablePreview }: Props) {
  if (query.preview) {
    enablePreview()
  }
}
