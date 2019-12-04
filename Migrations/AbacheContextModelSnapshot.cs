﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Oracle.EntityFrameworkCore.Metadata;
using TaskSharpHTTP.Models;

namespace ProyectoMorenita.Migrations
{
    [DbContext(typeof(AbacheContext))]
    partial class AbacheContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Oracle:ValueGenerationStrategy", OracleValueGenerationStrategy.IdentityColumn)
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            modelBuilder.Entity("TaskSharpHTTP.Models.CarroItem", b =>
                {
                    b.Property<int>("Id_carro")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID_CARRO");

                    b.Property<int>("Cantidad")
                        .HasColumnName("CANTIDAD");

                    b.Property<string>("Estado")
                        .HasColumnName("ESTADO");

                    b.Property<int>("Id_persona")
                        .HasColumnName("ID_PERSONA");

                    b.Property<int>("Id_producto")
                        .HasColumnName("ID_PRODUCTO");

                    b.Property<int>("Total")
                        .HasColumnName("TOTAL");

                    b.HasKey("Id_carro");

                    b.HasIndex("Id_persona");

                    b.HasIndex("Id_producto");

                    b.ToTable("CARROITEM");
                });

            modelBuilder.Entity("TaskSharpHTTP.Models.Carrousel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<byte[]>("Imagen");

                    b.HasKey("Id");

                    b.ToTable("Carrousels");
                });

            modelBuilder.Entity("TaskSharpHTTP.Models.CategoriaItem", b =>
                {
                    b.Property<int>("Id_categoria")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID_CATEGORIA");

                    b.Property<string>("Nombre")
                        .HasColumnName("NOMBRE");

                    b.HasKey("Id_categoria");

                    b.ToTable("CATEGORIAITEM");
                });

            modelBuilder.Entity("TaskSharpHTTP.Models.CiudadItem", b =>
                {
                    b.Property<int>("Id_ciudad")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID_CIUDAD");

                    b.Property<int>("Id_departamento")
                        .HasColumnName("ID_DEPARTAMENTO");

                    b.Property<string>("Nombre")
                        .HasColumnName("NOMBRE");

                    b.HasKey("Id_ciudad");

                    b.HasIndex("Id_departamento");

                    b.ToTable("CIUDADITEM");
                });

            modelBuilder.Entity("TaskSharpHTTP.Models.DepartamentoItem", b =>
                {
                    b.Property<int>("Id_departamento")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID_DEPARTAMENTO");

                    b.Property<string>("Nombre")
                        .HasColumnName("NOMBRE");

                    b.HasKey("Id_departamento");

                    b.ToTable("DEPARTAMENTOITEM");
                });

            modelBuilder.Entity("TaskSharpHTTP.Models.EtiquetaItem", b =>
                {
                    b.Property<int>("Id_etiqueta")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID_ETIQUETA");

                    b.Property<int>("Id_categoria")
                        .HasColumnName("ID_CATEGORIA");

                    b.Property<string>("Nombre")
                        .HasColumnName("NOMBRE");

                    b.HasKey("Id_etiqueta");

                    b.HasIndex("Id_categoria");

                    b.ToTable("ETIQUETAITEM");
                });

            modelBuilder.Entity("TaskSharpHTTP.Models.FacturaDetalleItem", b =>
                {
                    b.Property<int>("Id_facturadetalle")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID_FACTURADETALLE");

                    b.Property<int>("Cantidad")
                        .HasColumnName("CANTIDAD");

                    b.Property<string>("Estilo_color")
                        .HasColumnName("ESTILO_COLOR");

                    b.Property<int?>("FacturaDetalleItemId_facturadetalle");

                    b.Property<int>("Id_factura")
                        .HasColumnName("ID_FACTURA");

                    b.Property<int>("Id_producto")
                        .HasColumnName("ID_PRODUCTO");

                    b.Property<int>("Id_vendedor")
                        .HasColumnName("ID_VENDEDOR");

                    b.Property<string>("Nombre_vendedor")
                        .HasColumnName("NOMBRE_VENDEDOR");

                    b.Property<int>("Precio")
                        .HasColumnName("PRECIO");

                    b.Property<string>("Titulo")
                        .HasColumnName("TITULO");

                    b.Property<int>("Total_producto")
                        .HasColumnName("TOTAL_PRODUCTO");

                    b.HasKey("Id_facturadetalle");

                    b.HasIndex("FacturaDetalleItemId_facturadetalle");

                    b.HasIndex("Id_factura");

                    b.ToTable("FACTURADETALLEITEM");
                });

            modelBuilder.Entity("TaskSharpHTTP.Models.FacturaItem", b =>
                {
                    b.Property<int>("Id_factura")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID_FACTURA");

                    b.Property<string>("Apellido")
                        .HasColumnName("APELLIDO_PERSONA");

                    b.Property<string>("Direccion")
                        .HasColumnName("DIRECCION");

                    b.Property<int>("Id_persona")
                        .HasColumnName("ID_PERSONA");

                    b.Property<string>("Nombre")
                        .HasColumnName("NOMBRE_PERSONA");

                    b.Property<string>("Telefono")
                        .HasColumnName("TELEFONO");

                    b.Property<string>("ciudad")
                        .HasColumnName("CIUDAD");

                    b.Property<string>("departamento")
                        .HasColumnName("DEPARTAMENTO");

                    b.Property<DateTime>("fecha")
                        .HasColumnName("FECHA");

                    b.HasKey("Id_factura");

                    b.HasIndex("Id_persona");

                    b.ToTable("FACTURAITEM");
                });

            modelBuilder.Entity("TaskSharpHTTP.Models.MensajeItem", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Cliente");

                    b.Property<string>("Enviado_por");

                    b.Property<string>("Mensaje");

                    b.Property<string>("Vendedor");

                    b.Property<DateTime>("fecha");

                    b.HasKey("Id");

                    b.ToTable("MENSAJEITEM");
                });

            modelBuilder.Entity("TaskSharpHTTP.Models.PersonaItem", b =>
                {
                    b.Property<int>("Id_persona")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID_PERSONA");

                    b.Property<string>("Apellido")
                        .HasColumnName("APELLIDOS");

                    b.Property<string>("Apodo")
                        .HasColumnName("APODO");

                    b.Property<string>("Direccion")
                        .HasColumnName("DIRECCION");

                    b.Property<string>("Email")
                        .HasColumnName("EMAIL");

                    b.Property<int>("Id_ciudad")
                        .HasColumnName("ID_CIUDAD");

                    b.Property<int>("Id_departamento")
                        .HasColumnName("ID_DEPARTAMENTO");

                    b.Property<int>("Id_rol")
                        .HasColumnName("ID_ROL");

                    b.Property<byte[]>("Imagen")
                        .HasColumnName("IMAGEN");

                    b.Property<string>("Nombre")
                        .HasColumnName("NOMBRES");

                    b.Property<string>("Password")
                        .HasColumnName("PASSWORD");

                    b.Property<string>("Telefono")
                        .HasColumnName("TELEFONO");

                    b.HasKey("Id_persona");

                    b.HasIndex("Id_ciudad");

                    b.HasIndex("Id_departamento");

                    b.HasIndex("Id_rol");

                    b.ToTable("PERSONAITEM");
                });

            modelBuilder.Entity("TaskSharpHTTP.Models.ProductItem", b =>
                {
                    b.Property<int>("Id_producto")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID_PRODUCTO");

                    b.Property<int>("Cantidad")
                        .HasColumnName("INVENTARIO");

                    b.Property<string>("Descripcion")
                        .HasColumnName("DESCRIPCION");

                    b.Property<string>("Estilo_color")
                        .HasColumnName("ESTILO_COLOR");

                    b.Property<int>("Id_categoria")
                        .HasColumnName("ID_CATEGORIA");

                    b.Property<byte[]>("Imagen")
                        .HasColumnName("IMAGEN");

                    b.Property<int>("Precio")
                        .HasColumnName("PRECIO");

                    b.Property<string>("Titulo")
                        .HasColumnName("TITULO");

                    b.HasKey("Id_producto");

                    b.HasIndex("Id_categoria");

                    b.ToTable("PRODUCTITEM");
                });

            modelBuilder.Entity("TaskSharpHTTP.Models.RolItem", b =>
                {
                    b.Property<int>("Id_rol")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("ID_ROL");

                    b.Property<string>("Gestion_usuarios")
                        .HasColumnName("GESTION_USUARIOS");

                    b.Property<string>("Nombre")
                        .HasColumnName("NOMBRE");

                    b.Property<string>("Permiso_compra")
                        .HasColumnName("PERMISO_COMPRA");

                    b.Property<string>("Permiso_venta")
                        .HasColumnName("PERMISO_VENTA");

                    b.HasKey("Id_rol");

                    b.ToTable("ROLITEM");
                });

            modelBuilder.Entity("TaskSharpHTTP.Models.CarroItem", b =>
                {
                    b.HasOne("TaskSharpHTTP.Models.PersonaItem", "PersonaItem")
                        .WithMany("CarroItems")
                        .HasForeignKey("Id_persona")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("TaskSharpHTTP.Models.ProductItem", "ProductItem")
                        .WithMany("CarroItems")
                        .HasForeignKey("Id_producto")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("TaskSharpHTTP.Models.CiudadItem", b =>
                {
                    b.HasOne("TaskSharpHTTP.Models.DepartamentoItem", "departamentoItem")
                        .WithMany("CiudadItems")
                        .HasForeignKey("Id_departamento")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("TaskSharpHTTP.Models.EtiquetaItem", b =>
                {
                    b.HasOne("TaskSharpHTTP.Models.CategoriaItem", "categoriaItem")
                        .WithMany("EtiquetaItems")
                        .HasForeignKey("Id_categoria")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("TaskSharpHTTP.Models.FacturaDetalleItem", b =>
                {
                    b.HasOne("TaskSharpHTTP.Models.FacturaDetalleItem")
                        .WithMany("facturaDetalleItems")
                        .HasForeignKey("FacturaDetalleItemId_facturadetalle");

                    b.HasOne("TaskSharpHTTP.Models.FacturaItem", "facturaItem")
                        .WithMany("FacturaDetalleItems")
                        .HasForeignKey("Id_factura")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("TaskSharpHTTP.Models.FacturaItem", b =>
                {
                    b.HasOne("TaskSharpHTTP.Models.PersonaItem", "PersonaItem")
                        .WithMany("FacturaItems")
                        .HasForeignKey("Id_persona")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("TaskSharpHTTP.Models.PersonaItem", b =>
                {
                    b.HasOne("TaskSharpHTTP.Models.CiudadItem", "ciudadItem")
                        .WithMany("PersonaItems")
                        .HasForeignKey("Id_ciudad")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("TaskSharpHTTP.Models.DepartamentoItem", "departamentoItem")
                        .WithMany("PersonaItems")
                        .HasForeignKey("Id_departamento")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("TaskSharpHTTP.Models.RolItem", "rolItem")
                        .WithMany("PersonaItems")
                        .HasForeignKey("Id_rol")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("TaskSharpHTTP.Models.ProductItem", b =>
                {
                    b.HasOne("TaskSharpHTTP.Models.CategoriaItem", "CategoriaItem")
                        .WithMany("ProductItems")
                        .HasForeignKey("Id_categoria")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
