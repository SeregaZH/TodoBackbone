using Microsoft.Practices.Unity;
using System.Web.Http;
using TodoApplication.Controllers;
using TodoApplication.Interfaces.Repositories;
using TodoApplication.Repositories;
using Unity.WebApi;

namespace TodoApplication
{
  public static class UnityConfig
  {
    public static void RegisterComponents()
    {
      var container = new UnityContainer();
      container.RegisterType<IToDoRepository, ToDoRepository>(new ContainerControlledLifetimeManager());
      container.RegisterType<ToDoController, ToDoController>(new PerThreadLifetimeManager());
      GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
    }
  }
}