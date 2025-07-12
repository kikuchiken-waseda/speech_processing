=============
データベース
=============

.. toctree::
   :maxdepth: 2
   :caption: Contents:


実体関連モデル (Entity-Relationship Model)
===========================================

概要
----

実体関連モデル（Entity-Relationship Model、ERモデル）は、データベースの概念設計において、対象領域（業務ドメイン）を構造的かつ意味論的に記述するためのモデルである。1976年に Peter Chen により提唱された。

本モデルは、以下の3要素を基礎とする：

- **実体（Entity）**：識別可能な個体または概念。
- **属性（Attribute）**：実体の特性を表す情報。
- **関連（Relationship）**：実体間の意味的な接続関係。

これらにより、構造と意味の両面を明示的にモデル化する。

1. 実体（Entity）
-----------------

**定義**

実体とは、現実世界における識別可能な対象であり、データベース内で一意に表現される個体を意味する。

**実体集合（Entity Set）**

同種の実体の集合を実体集合と呼び、以下のように定義される：

.. math::
   E = \{e_1, e_2, \ldots, e_n\}, \quad n \in \mathbb{N}, \quad e_i \neq e_j \text{ if } i \neq j

ここで :math:`E` は実体集合、:math:`e_i` は個別の実体。

実体集合の例としてたとえば「人」「商品」「組織」「イベント」などが含まれ、実体の例として「山田太郎」「iPhone 13」「株式会社ABC」「2023年のオリンピック」などが挙げられる。

**属性構造との関係**

すべての :math:`e_i \in E` は共通の属性集合（スキーマ）を共有し、同型の構造を持つ。

2. 属性（Attribute）
---------------------

**定義**

属性とは、実体の性質や状態を表す情報単位であり、実体集合に対する写像（関数）として定義される。

**記法**

.. math::
   A : E \rightarrow D_A

ここで、:math:`E` は実体集合、:math:`D_A` は属性 :math:`A` の定義域（値の集合）である。

任意の :math:`e \in E` に対して、:math:`A(e) \in D_A` が成り立つ。

**属性の分類**

- 単一属性（Atomic Attribute）
- 複合属性（Composite Attribute）
- 多値属性（Multivalued Attribute）
- 派生属性（Derived Attribute）

3. 関連（Relationship）
-----------------------

**定義**

関連とは、複数の実体間に存在する意味的な接続関係を表現する構造である。

**関連集合（Relationship Set）**

.. math::
   R \subseteq E_1 \times E_2 \times \cdots \times E_n

ここで、:math:`R` の各要素が関連インスタンスであり、nは関連の次数（arity）と呼ばれる。

**補足**

- 同一の実体集合が複数回現れる場合もある（自己関連）。
- 関連にも属性が付与される場合がある（関連属性）。

4. 整合性制約（Integrity Constraints）
--------------------------------------

整合性制約とは、データベース内のデータが意味的に正しく、一貫性のある状態を保つために課される論理的ルールである。ERモデルにおいては、以下の制約が主要な役割を担う。

4.1 カーディナリティ制約（Cardinality Constraints）
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**定義**

カーディナリティ制約は、関連 :math:`R \subseteq E_1 \times E_2` において、各実体集合の要素が関連に参加する**回数の上限**を定める制約である。

**形式定義**

例えば :math:`R \subseteq A \times B` に対して：

- **1対1（1:1）**  
  任意の :math:`a \in A` に対して、高々1つの :math:`b \in B` が存在し、:math:`(a, b) \in R`。かつ逆も同様。

  .. math::
     \forall a \in A, \quad |\{ b \in B \mid (a, b) \in R \}| \leq 1

     \forall b \in B, \quad |\{ a \in A \mid (a, b) \in R \}| \leq 1

- **1対多（1:N）**  
  任意の :math:`a \in A` に対して、任意個の :math:`b \in B` と関連できるが、:math:`b` 側は最大1つの :math:`a` に関連。

  .. math::
     \forall b \in B, \quad |\{ a \in A \mid (a, b) \in R \}| \leq 1

- **多対多（M:N）**  
  双方に制約なし：

  .. math::
     \forall a \in A, \quad |\{ b \in B \mid (a, b) \in R \}| \geq 0

     \forall b \in B, \quad |\{ a \in A \mid (a, b) \in R \}| \geq 0

**記法例**

.. math::
   \text{Employee} \xrightarrow{1:N} \text{Department}

4.2 参加制約（Participation Constraints）
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**定義**

参加制約は、実体集合 :math:`E` の要素が関連 :math:`R` に対して**少なくとも一度**参加する必要があるかを定義する制約である。

**形式定義**

- **全体参加（Total Participation）**

  .. math::
     \forall e \in E, \quad \exists (e, e') \in R

- **部分参加（Partial Participation）**

  上記が成り立たない場合。すなわち：

  .. math::
     \exists e \in E, \quad \forall e', \; (e, e') \notin R

4.3 キー制約（Key Constraints）
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**定義**

キー制約とは、実体集合における識別性を保証する属性写像の組に対して課される制約である。

各属性 :math:`A_i` は以下のような写像として定義されている（2. 属性の定義に準拠）：

.. math::
   A_i : E \to D_i, \quad (i = 1, \ldots, k)

ここで、

- :math:`E` は対象の実体集合
- :math:`D_i` は属性 :math:`A_i` の定義域（値の集合）

これらの属性を組み合わせたタプル写像：

.. math::
   f = (A_1, A_2, \ldots, A_k) : E \to D_1 \times D_2 \times \cdots \times D_k

が **単射（injective）** であるとき、属性集合 :math:`\{A_1, A_2, \ldots, A_k\}` は **主キー（Primary Key）** を構成する。

すなわち、以下が成り立つ：

.. math::
   \forall e_1, e_2 \in E, \quad f(e_1) = f(e_2) \Rightarrow e_1 = e_2

**分類**

- **主キー（Primary Key）**：上記条件を満たす属性写像の組。
- **部分キー（Partial Key）**：弱実体集合 :math:`W` において、親実体集合 :math:`P` の主キーと組み合わせたときに識別可能となる写像 :math:`p : W \to D'`。
- **外部キー（Foreign Key）**：別の実体集合 :math:`E'` の主キー値を参照する属性写像群。関係モデルへの変換後に制約として実装される。

**補足**

- 属性集合という語は、属性の「名前の集まり」ではなく、それぞれ :math:`A_i : E \to D_i` のような「関数（写像）」の集合を意味する。
- 写像 :math:`f = (A_1, \ldots, A_k)` に injectivity を課すことで、実体の一意性を保証する。


4.4 弱実体集合と識別関係（Weak Entity Sets and Identifying Relationships）
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**定義**

弱実体集合とは、単独では一意に識別できない実体集合であり、他の親実体集合と**識別関係（identifying relationship）**を通じて識別される。

**構造条件**

- 弱実体集合 :math:`W` は識別関係 :math:`R \subseteq W \times P` に対して**全体参加**である：

  .. math::
     \forall w \in W, \exists p \in P, \; (w, p) \in R

- 識別には親の主キー :math:`K_P` と部分キー :math:`K_W` の組が必要：

  .. math::
     \text{識別関数 } f: W \to K_P \times K_W \text{ が injective}

**例**

- 実体集合 `Building`（主キー：building_id）と `Room`（属性：room_no）は、room_no だけでは識別不能。  
  `Room` は `Building` との関連によって (building_id, room_no) の組で識別される。


5. 汎化と専化（Generalization and Specialization）
---------------------------------------------------

5.1 概要
~~~~~~~~

汎化と専化は、実体集合の階層的関係を集合論的に定式化する操作である。

- **汎化（Generalization）**：複数の実体集合から共通上位集合を構成する操作。
- **専化（Specialization）**：1つの実体集合から条件に基づき下位集合を導出する操作。

5.2 形式定義
~~~~~~~~~~~~~

**汎化**

.. math::
   \forall i \in \{1, \ldots, k\}, \quad E_i \subseteq G \
   \text{かつ} \quad Attributes(G) \subseteq Attributes(E_i)

**専化**

.. math::
   \forall i \in \{1, \ldots, k\}, \quad S_i \subseteq E \
   \text{かつ} \quad Attributes(E) \subseteq Attributes(S_i)

6. ER図（Entity-Relationship Diagram）
--------------------------------------

ER図は、ERモデルを視覚的に表現するための標準的な図式記法であり、要素間の関係構造を直感的に把握可能とする。

6.1 構成要素
~~~~~~~~~~~~~

- 実体：矩形
- 属性：楕円
- 主キー属性：下線付き楕円
- 関連：菱形
- 線：要素間の接続を表す

6.2 属性の図式表現
~~~~~~~~~~~~~~~~~~~~

- 複合属性：複数楕円と線で分解表示
- 多値属性：二重楕円
- 派生属性：点線楕円

6.3 制約の図式表現
~~~~~~~~~~~~~~~~~~~~

- カーディナリティ：線の横に (1:N) 等で明示
- 参加制約：全体参加は実線、部分参加は破線

6.4 弱実体と識別関係の表現
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

- 弱実体集合：二重矩形
- 識別関係：二重菱形
- 部分キー属性：通常楕円（下線なし）

6.5 拡張表記
~~~~~~~~~~~~~

- n-項関連：3項以上の関連に対応
- 汎化・専化：三角形ノードで階層表現
- 集約：矩形で囲ってメタ構造を明示

