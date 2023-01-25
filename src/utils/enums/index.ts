// Status de usuário
export enum UserStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
  PENDING = "pending",
  BLOCKED = "blocked",
}

// Frequência de recebimento de proventos de um ativo
export enum FrequencyProceeds {
  MONTHLY = "monthly",
  QUARTELY = "quarterly",
  SEMESTERLY = "semesterly",
  YEARLY = "yearly",
}

// Categória de ativo
export enum AssetCategory {
  VARIABLE = "variable",
  FIXED = "fixes",
}

// Medida de risco de um ativo
export enum AssetRisc {
  LOW = "low",
  MODERATE = "moderate",
  HIGH = "high",
}

// Movimento feito em um investimento ( venda ou compra )
export enum InvestmentMovement {
  BUY = "buy",
  SELL = "sell",
}

// Movimento do investimento ( alta ou baixa )
export enum VariationAsset {
  DOWN = "down",
  UP = "up",
}
