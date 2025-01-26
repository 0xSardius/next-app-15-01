export default async function ProductPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  return (
    // A route parameter is a dynamic part of the URL that can be used to fetch data from an API or database.
    <div>
      <h1>Product Page {productId}</h1>
    </div>
  );
}
