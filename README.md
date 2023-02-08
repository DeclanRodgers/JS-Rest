# REST GET and print Github Action

This action prints the GET data response from a specified API.

## Inputs

### `api-endpoint-url`

**Required** The URL of the endpoint you wish to GET from. Default `"https://catfact.ninja/fact"`.

## Example usage

```yaml
uses: DeclanRodgers/get-and-print-github-action@v1.1
with:
  api-endpoint-url: 'https://www.boredapi.com/api/activity'
```