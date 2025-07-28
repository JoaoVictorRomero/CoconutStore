"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { api } from "@/trpc/react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const utils = api.useUtils();
  const { data: products = [] } = api.product.getAll.useQuery();
  const createProduct = api.product.create.useMutation({
    onSuccess: () => {
      utils.product.getAll.invalidate();
      toast.success("Produto criado com sucesso");
      setFormData(initialState);
    },
    onError: () => toast.error("Erro ao criar produto"),
  });

  if (status === "loading") return <p>Carregando...</p>;
  if (!session) return router.push("/api/auth/signin");

  const initialState = {
    name: "",
    price: "",
    image: "",
    description: "",
    category: "",
    inStock: true,
    topSeller: false,
  };
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSwitchChange = (name) => (checked) => {
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !formData.description || !formData.category) {
      toast.error("Preencha todos os campos obrigatórios");
      return;
    }
    createProduct.mutate({
      name: formData.name,
      price: parseFloat(formData.price),
      image: formData.image || "/placeholder.svg",
      description: formData.description,
      category: formData.category,
      inStock: formData.inStock,
      topSeller: formData.topSeller,
    });
  };

  return (
    <div className="container mx-auto py-8 max-w-6xl">
      <h1 className="text-2xl font-bold mb-6">Painel do Admin</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Adicionar Produto</CardTitle>
            <CardDescription>Preencha os campos abaixo</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Nome *</Label>
                <Input name="name" value={formData.name} onChange={handleInputChange} />
              </div>
              <div>
                <Label htmlFor="price">Preço *</Label>
                <Input name="price" type="number" step="0.01" value={formData.price} onChange={handleInputChange} />
              </div>
              <div>
                <Label htmlFor="category">Categoria *</Label>
                <Input name="category" value={formData.category} onChange={handleInputChange} />
              </div>
              <div>
                <Label htmlFor="description">Descrição *</Label>
                <Textarea name="description" value={formData.description} onChange={handleInputChange} />
              </div>
              <div>
                <Label htmlFor="image">Imagem (URL)</Label>
                <Input name="image" value={formData.image} onChange={handleInputChange} />
              </div>
              <div className="flex justify-between">
                <Label>Em Estoque</Label>
                <Switch checked={formData.inStock} onCheckedChange={handleSwitchChange("inStock")} />
              </div>
              <div className="flex justify-between">
                <Label>Mais Vendido</Label>
                <Switch checked={formData.topSeller} onCheckedChange={handleSwitchChange("topSeller")} />
              </div>
              <Button type="submit">Adicionar</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Produtos ({products.length})</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 max-h-[600px] overflow-y-auto">
            {products.map((p) => (
              <div key={p.id} className="border rounded p-3 space-y-2">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-semibold">{p.name}</h3>
                    <p className="text-sm text-muted-foreground">{p.description}</p>
                  </div>
                  <p className="font-bold">R$ {p.price.toFixed(2)}</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="secondary">{p.category}</Badge>
                  {p.topSeller && <Badge variant="default">Mais Vendido</Badge>}
                  <Badge variant={p.inStock ? "default" : "destructive"}>
                    {p.inStock ? "Em Estoque" : "Fora de Estoque"}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
