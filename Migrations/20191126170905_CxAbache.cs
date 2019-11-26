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
                name: "CarroItems",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn),
                    Id_cliente = table.Column<int>(nullable: false),
                    Id_producto = table.Column<int>(nullable: false),
                    Cantidad = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CarroItems", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CategoriaItems",
                columns: table => new
                {
                    ID_CATEGORIA = table.Column<int>(nullable: false)
                        .Annotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn),
                    NOMBRE = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CategoriaItems", x => x.ID_CATEGORIA);
                });

            migrationBuilder.CreateTable(
                name: "DepartamentoItem",
                columns: table => new
                {
                    ID_DEPARTAMENTO = table.Column<int>(nullable: false)
                        .Annotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn),
                    NOMBRE = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DepartamentoItem", x => x.ID_DEPARTAMENTO);
                });

            migrationBuilder.CreateTable(
                name: "RolItem",
                columns: table => new
                {
                    ID_ROL = table.Column<int>(nullable: false)
                        .Annotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn),
                    NOMBRE = table.Column<string>(nullable: true),
                    PERMISO_COMPRA = table.Column<string>(nullable: true),
                    PERMISO_VENTA = table.Column<string>(nullable: true),
                    GESTION_USUARIOS = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RolItem", x => x.ID_ROL);
                });

            migrationBuilder.CreateTable(
                name: "EtiquetaItems",
                columns: table => new
                {
                    ID_ETIQUETA = table.Column<int>(nullable: false)
                        .Annotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn),
                    ID_CATEGORIA = table.Column<int>(nullable: true),
                    NOMBRE = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EtiquetaItems", x => x.ID_ETIQUETA);
                    table.ForeignKey(
                        name: "FK_EtiquetaItems_CategoriaItems_ID_CATEGORIA",
                        column: x => x.ID_CATEGORIA,
                        principalTable: "CategoriaItems",
                        principalColumn: "ID_CATEGORIA",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ProductItems",
                columns: table => new
                {
                    ID_PRODUCTO = table.Column<int>(nullable: false)
                        .Annotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn),
                    TITULO = table.Column<string>(nullable: true),
                    DESCRIPCION = table.Column<string>(nullable: true),
                    ESTILO_COLOR = table.Column<string>(nullable: true),
                    PRECIO = table.Column<int>(nullable: false),
                    IMAGEN = table.Column<byte[]>(nullable: true),
                    ID_CATEGORIA = table.Column<int>(nullable: true),
                    CANTIDAD = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductItems", x => x.ID_PRODUCTO);
                    table.ForeignKey(
                        name: "FK_ProductItems_CategoriaItems_ID_CATEGORIA",
                        column: x => x.ID_CATEGORIA,
                        principalTable: "CategoriaItems",
                        principalColumn: "ID_CATEGORIA",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "CiudadItem",
                columns: table => new
                {
                    ID_CIUDAD = table.Column<int>(nullable: false)
                        .Annotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn),
                    NOMBRE = table.Column<string>(nullable: true),
                    ID_DEPARTAMENTO = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CiudadItem", x => x.ID_CIUDAD);
                    table.ForeignKey(
                        name: "FK_CiudadItem_DepartamentoItem_ID_DEPARTAMENTO",
                        column: x => x.ID_DEPARTAMENTO,
                        principalTable: "DepartamentoItem",
                        principalColumn: "ID_DEPARTAMENTO",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "PersonaItems",
                columns: table => new
                {
                    ID_PERSONA = table.Column<int>(nullable: false)
                        .Annotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn),
                    IMAGEN = table.Column<byte[]>(nullable: true),
                    NOMBRES = table.Column<string>(nullable: true),
                    APELLIDOS = table.Column<string>(nullable: true),
                    TELEFONO = table.Column<string>(nullable: true),
                    ID_DEPARTAMENTO = table.Column<int>(nullable: true),
                    ID_CIUDAD = table.Column<int>(nullable: true),
                    DIRECCION = table.Column<string>(nullable: true),
                    APODO = table.Column<string>(nullable: true),
                    EMAIL = table.Column<string>(nullable: true),
                    PASSWORD = table.Column<string>(nullable: true),
                    ID_ROL = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PersonaItems", x => x.ID_PERSONA);
                    table.ForeignKey(
                        name: "FK_PersonaItems_CiudadItem_ID_CIUDAD",
                        column: x => x.ID_CIUDAD,
                        principalTable: "CiudadItem",
                        principalColumn: "ID_CIUDAD",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_PersonaItems_DepartamentoItem_ID_DEPARTAMENTO",
                        column: x => x.ID_DEPARTAMENTO,
                        principalTable: "DepartamentoItem",
                        principalColumn: "ID_DEPARTAMENTO",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_PersonaItems_RolItem_ID_ROL",
                        column: x => x.ID_ROL,
                        principalTable: "RolItem",
                        principalColumn: "ID_ROL",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CiudadItem_ID_DEPARTAMENTO",
                table: "CiudadItem",
                column: "ID_DEPARTAMENTO");

            migrationBuilder.CreateIndex(
                name: "IX_EtiquetaItems_ID_CATEGORIA",
                table: "EtiquetaItems",
                column: "ID_CATEGORIA");

            migrationBuilder.CreateIndex(
                name: "IX_PersonaItems_ID_CIUDAD",
                table: "PersonaItems",
                column: "ID_CIUDAD");

            migrationBuilder.CreateIndex(
                name: "IX_PersonaItems_ID_DEPARTAMENTO",
                table: "PersonaItems",
                column: "ID_DEPARTAMENTO");

            migrationBuilder.CreateIndex(
                name: "IX_PersonaItems_ID_ROL",
                table: "PersonaItems",
                column: "ID_ROL");

            migrationBuilder.CreateIndex(
                name: "IX_ProductItems_ID_CATEGORIA",
                table: "ProductItems",
                column: "ID_CATEGORIA");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CarroItems");

            migrationBuilder.DropTable(
                name: "EtiquetaItems");

            migrationBuilder.DropTable(
                name: "PersonaItems");

            migrationBuilder.DropTable(
                name: "ProductItems");

            migrationBuilder.DropTable(
                name: "CiudadItem");

            migrationBuilder.DropTable(
                name: "RolItem");

            migrationBuilder.DropTable(
                name: "CategoriaItems");

            migrationBuilder.DropTable(
                name: "DepartamentoItem");
        }
    }
}
