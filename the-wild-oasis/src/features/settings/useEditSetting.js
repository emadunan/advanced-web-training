import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting } from "../../services/apiSettings";

export function useEditSetting() {
  const queryClient = useQueryClient();

  const { mutate: editSettingMutate, isLoading: isEditingSetting } = useMutation({
    mutationFn: updateSetting,
    onSuccess: () => {
      toast.success("New Setting successfully edited");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { editSettingMutate, isEditingSetting };
}
