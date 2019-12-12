using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Oracle.EntityFrameworkCore.Metadata;

namespace ProyectoMorenita.Migrations
{
    public partial class CxAbache : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CATEGORIAITEM",
                columns: table => new
                {
                    ID_CATEGORIA = table.Column<int>(nullable: false)
                        .Annotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn),
                    NOMBRE = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CATEGORIAITEM", x => x.ID_CATEGORIA);
                });

            migrationBuilder.CreateTable(
                name: "DEPARTAMENTOITEM",
                columns: table => new
                {
                    ID_DEPARTAMENTO = table.Column<int>(nullable: false)
                        .Annotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn),
                    NOMBRE = table.Column<string>(type: "VARCHAR2(10)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DEPARTAMENTOITEM", x => x.ID_DEPARTAMENTO);
                });

            migrationBuilder.CreateTable(
                name: "ROLITEM",
                columns: table => new
                {
                    ID_ROL = table.Column<int>(nullable: false)
                        .Annotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn),
                    NOMBRE = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ROLITEM", x => x.ID_ROL);
                });

            migrationBuilder.CreateTable(
                name: "ETIQUETAITEM",
                columns: table => new
                {
                    ID_ETIQUETA = table.Column<int>(nullable: false)
                        .Annotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn),
                    ID_CATEGORIA = table.Column<int>(nullable: false),
                    NOMBRE = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ETIQUETAITEM", x => x.ID_ETIQUETA);
                    table.ForeignKey(
                        name: "FK_ETIQUETAITEM_CATEGORIAITEM_ID_CATEGORIA",
                        column: x => x.ID_CATEGORIA,
                        principalTable: "CATEGORIAITEM",
                        principalColumn: "ID_CATEGORIA",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CIUDADITEM",
                columns: table => new
                {
                    ID_CIUDAD = table.Column<int>(nullable: false)
                        .Annotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn),
                    NOMBRE = table.Column<string>(type: "VARCHAR2(10)", nullable: true),
                    ID_DEPARTAMENTO = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CIUDADITEM", x => x.ID_CIUDAD);
                    table.ForeignKey(
                        name: "FK_CIUDADITEM_DEPARTAMENTOITEM_ID_DEPARTAMENTO",
                        column: x => x.ID_DEPARTAMENTO,
                        principalTable: "DEPARTAMENTOITEM",
                        principalColumn: "ID_DEPARTAMENTO",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PERSONAITEM",
                columns: table => new
                {
                    ID_PERSONA = table.Column<int>(nullable: false)
                        .Annotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn),
                    IMAGEN = table.Column<byte[]>(nullable: true),
                    NOMBRES = table.Column<string>(type: "VARCHAR2(20)", nullable: true),
                    APELLIDOS = table.Column<string>(type: "VARCHAR2(20)", nullable: true),
                    TELEFONO = table.Column<string>(type: "VARCHAR2(10)", nullable: true),
                    ID_DEPARTAMENTO = table.Column<int>(nullable: false),
                    ID_CIUDAD = table.Column<int>(nullable: false),
                    DIRECCION = table.Column<string>(type: "VARCHAR2(15)", nullable: true),
                    APODO = table.Column<string>(type: "VARCHAR2(10)", nullable: true),
                    EMAIL = table.Column<string>(type: "VARCHAR2(20)", nullable: true),
                    PASSWORD = table.Column<string>(type: "VARCHAR2(20)", nullable: true),
                    ID_ROL = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PERSONAITEM", x => x.ID_PERSONA);
                    table.ForeignKey(
                        name: "FK_PERSONAITEM_CIUDADITEM_ID_CIUDAD",
                        column: x => x.ID_CIUDAD,
                        principalTable: "CIUDADITEM",
                        principalColumn: "ID_CIUDAD",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PERSONAITEM_DEPARTAMENTOITEM_ID_DEPARTAMENTO",
                        column: x => x.ID_DEPARTAMENTO,
                        principalTable: "DEPARTAMENTOITEM",
                        principalColumn: "ID_DEPARTAMENTO",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PERSONAITEM_ROLITEM_ID_ROL",
                        column: x => x.ID_ROL,
                        principalTable: "ROLITEM",
                        principalColumn: "ID_ROL",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FACTURAITEM",
                columns: table => new
                {
                    ID_FACTURA = table.Column<int>(nullable: false)
                        .Annotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn),
                    ID_PERSONA = table.Column<int>(nullable: false),
                    FECHA = table.Column<DateTime>(nullable: false),
                    NOMBRE_PERSONA = table.Column<string>(type: "VARCHAR2(20)", nullable: true),
                    APELLIDO_PERSONA = table.Column<string>(type: "VARCHAR2(20)", nullable: true),
                    TELEFONO = table.Column<string>(type: "VARCHAR2(10)", nullable: true),
                    DEPARTAMENTO = table.Column<string>(type: "VARCHAR2(10)", nullable: true),
                    CIUDAD = table.Column<string>(type: "VARCHAR2(10)", nullable: true),
                    DIRECCION = table.Column<string>(type: "VARCHAR2(15)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FACTURAITEM", x => x.ID_FACTURA);
                    table.ForeignKey(
                        name: "FK_FACTURAITEM_PERSONAITEM_ID_PERSONA",
                        column: x => x.ID_PERSONA,
                        principalTable: "PERSONAITEM",
                        principalColumn: "ID_PERSONA",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PRODUCTITEM",
                columns: table => new
                {
                    ID_PRODUCTO = table.Column<int>(nullable: false)
                        .Annotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn),
                    TITULO = table.Column<string>(type: "VARCHAR2(50)", nullable: true),
                    DESCRIPCION = table.Column<string>(type: "VARCHAR2(500)", nullable: true),
                    ESTILO_COLOR = table.Column<string>(type: "VARCHAR2(15)", nullable: true),
                    PRECIO = table.Column<int>(nullable: false),
                    INVENTARIO = table.Column<int>(nullable: false),
                    ID_VENDEDOR = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PRODUCTITEM", x => x.ID_PRODUCTO);
                    table.ForeignKey(
                        name: "FK_PRODUCTITEM_PERSONAITEM_ID_VENDEDOR",
                        column: x => x.ID_VENDEDOR,
                        principalTable: "PERSONAITEM",
                        principalColumn: "ID_PERSONA",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FACTURADETALLEITEM",
                columns: table => new
                {
                    ID_FACTURADETALLE = table.Column<int>(nullable: false)
                        .Annotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn),
                    ID_FACTURA = table.Column<int>(nullable: false),
                    ID_PRODUCTO = table.Column<int>(nullable: false),
                    TITULO = table.Column<string>(type: "VARCHAR2(50)", nullable: true),
                    ESTILO_COLOR = table.Column<string>(type: "VARCHAR2(15)", nullable: true),
                    CANTIDAD = table.Column<byte>(type: "NUMBER(4)", nullable: false),
                    PRECIO = table.Column<int>(nullable: false),
                    TOTAL_PRODUCTO = table.Column<int>(nullable: false),
                    ID_VENDEDOR = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FACTURADETALLEITEM", x => x.ID_FACTURADETALLE);
                    table.ForeignKey(
                        name: "FK_FACTURADETALLEITEM_FACTURAITEM_ID_FACTURA",
                        column: x => x.ID_FACTURA,
                        principalTable: "FACTURAITEM",
                        principalColumn: "ID_FACTURA",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CARROITEM",
                columns: table => new
                {
                    ID_CARRO = table.Column<int>(nullable: false)
                        .Annotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn),
                    ID_PERSONA = table.Column<int>(nullable: false),
                    ID_PRODUCTO = table.Column<int>(nullable: false),
                    CANTIDAD = table.Column<byte>(type: "Number(3)", nullable: false),
                    TOTAL = table.Column<int>(nullable: false),
                    ESTADO = table.Column<string>(type: "varchar2(30)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CARROITEM", x => x.ID_CARRO);
                    table.ForeignKey(
                        name: "FK_CARROITEM_PERSONAITEM_ID_PERSONA",
                        column: x => x.ID_PERSONA,
                        principalTable: "PERSONAITEM",
                        principalColumn: "ID_PERSONA",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CARROITEM_PRODUCTITEM_ID_PRODUCTO",
                        column: x => x.ID_PRODUCTO,
                        principalTable: "PRODUCTITEM",
                        principalColumn: "ID_PRODUCTO",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CARROITEM_ID_PERSONA",
                table: "CARROITEM",
                column: "ID_PERSONA");

            migrationBuilder.CreateIndex(
                name: "IX_CARROITEM_ID_PRODUCTO",
                table: "CARROITEM",
                column: "ID_PRODUCTO");

            migrationBuilder.CreateIndex(
                name: "IX_CIUDADITEM_ID_DEPARTAMENTO",
                table: "CIUDADITEM",
                column: "ID_DEPARTAMENTO");

            migrationBuilder.CreateIndex(
                name: "IX_ETIQUETAITEM_ID_CATEGORIA",
                table: "ETIQUETAITEM",
                column: "ID_CATEGORIA");

            migrationBuilder.CreateIndex(
                name: "IX_FACTURADETALLEITEM_ID_FACTURA",
                table: "FACTURADETALLEITEM",
                column: "ID_FACTURA");

            migrationBuilder.CreateIndex(
                name: "IX_FACTURAITEM_ID_PERSONA",
                table: "FACTURAITEM",
                column: "ID_PERSONA");

            migrationBuilder.CreateIndex(
                name: "IX_PERSONAITEM_ID_CIUDAD",
                table: "PERSONAITEM",
                column: "ID_CIUDAD");

            migrationBuilder.CreateIndex(
                name: "IX_PERSONAITEM_ID_DEPARTAMENTO",
                table: "PERSONAITEM",
                column: "ID_DEPARTAMENTO");

            migrationBuilder.CreateIndex(
                name: "IX_PERSONAITEM_ID_ROL",
                table: "PERSONAITEM",
                column: "ID_ROL");

            migrationBuilder.CreateIndex(
                name: "IX_PRODUCTITEM_ID_VENDEDOR",
                table: "PRODUCTITEM",
                column: "ID_VENDEDOR");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CARROITEM");

            migrationBuilder.DropTable(
                name: "ETIQUETAITEM");

            migrationBuilder.DropTable(
                name: "FACTURADETALLEITEM");

            migrationBuilder.DropTable(
                name: "PRODUCTITEM");

            migrationBuilder.DropTable(
                name: "CATEGORIAITEM");

            migrationBuilder.DropTable(
                name: "FACTURAITEM");

            migrationBuilder.DropTable(
                name: "PERSONAITEM");

            migrationBuilder.DropTable(
                name: "CIUDADITEM");

            migrationBuilder.DropTable(
                name: "ROLITEM");

            migrationBuilder.DropTable(
                name: "DEPARTAMENTOITEM");
        }
    }
}
